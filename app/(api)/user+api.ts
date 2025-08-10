/* eslint-disable prettier/prettier */
import { neon } from "@neondatabase/serverless";

export async function POST(Request: {
  json: () =>
    | PromiseLike<{ name: any; email: any; clerkId: any }>
    | { name: any; email: any; clerkId: any };
}) {
  // Get the database URL from environment variable
  const sql = neon(process.env.DATABASE_URL);
  const { name, email, clerkId } = await Request.json();

  // Check for missing required fields
  if (!name || !email || !clerkId) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    // Insert user into the database
    const response = await sql`
      INSERT INTO users(name, email, clerkId)
      VALUES (${name}, ${email}, ${clerkId})
    `;

    // Return success response
    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    // Log and return error response
    console.error(error);
    return new Response(JSON.stringify({ error: error.message || error }), {
      status: 500,
    });
  }
}
