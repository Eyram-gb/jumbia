import { createClient, groq } from "next-sanity";
import clientConfig from "../config/clientConfig";

export async function getProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category']`
  );
}
