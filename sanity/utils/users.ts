'use server'

import { createClient } from "next-sanity";
import clientConfig from "../config/clientConfig";

export async function createUser(
  username: string,
  // email: string,
  password: string
) {
  const newUser = {
    _type: "users", // Replace with the actual type of your user schema
    username,
    // email,
    password, // Make sure to handle password security appropriately
  };

  try {
    const response = await createClient(clientConfig).create(newUser);
    console.log("User created:", response);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
