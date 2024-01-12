import { createClient, groq } from "next-sanity";
import clientConfig from "../config/clientConfig";
import { Category } from "@/types/product";

export async function getCategories():Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category']{
  _id,
  'image':{'url':image.asset->url, 'alt':image.alt},
  name,
}`
  );
}
