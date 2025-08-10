/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#e2e8f0] rounded-full"></View>
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286ff] rounded-full "></View>
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => {
          return (
            <View
              key={item.title}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10 ">
                <Text className="text-black text-3xl font-bold mx-10 text-center ">
                  {item.title}
                </Text>
              </View>

              <View className="font-JakartaSemiBold text-center items-center text-[#858585] mx-10 mt-3">
                <Text className="text-center text-lg">{item.description}</Text>
              </View>
            </View>
          );
        })}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get started" : "Next"}
        className="w-11/12 mt-10"
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
};

export default Onboarding;
