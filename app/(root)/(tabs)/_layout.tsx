/* eslint-disable prettier/prettier */
import { Tabs } from "expo-router";
import Home from "./home";
import Rides from "./rides";
import Chat from "./chat";
import Profile from "./profile";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View
      style={{
        width: 50,
        marginTop: 30,
        height: 50,
        borderRadius: 25, // Fully rounded for a circular area
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        backgroundColor: focused ? "#4CAF50" : "transparent", // Background color for focused
      }}
    >
      <Image
        source={source}
        style={{
          width: 25, // Adjust size to fit inside the circle
          height: 25,
          tintColor: "white", // Icon color
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const Layout = () => (
  <Tabs
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: "#4CAF50",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#333333", // Tab bar background
        borderRadius: 50, // Rounded tab bar
        overflow: "hidden",
        marginHorizontal: 20, // Add horizontal margins
        marginBottom: 15,
        height: 75, // Height of the tab bar
        justifyContent: "center", // Center the tab items
        paddingBottom: 10, // Prevent items from sticking to the top
        alignItems: "center", // Align items within the bar
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />

    <Tabs.Screen
      name="rides"
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />

    <Tabs.Screen
      name="chat"
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />

    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;
