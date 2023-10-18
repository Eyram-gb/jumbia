import { createClient, groq } from "next-sanity";
import clientConfig from "../config/clientConfig";

export async function getProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product']{
  _id,
  name,
  price,
  'brand':brand,
  ratings,
  discount,
  'slug':slug.current,
  category->{
    name,
    parentCategory->{name}
  },
  'image':image.asset->url
}`
  );
}
