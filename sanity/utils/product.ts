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
export async function getProductsCategory(categoryID: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product' && category._ref == $categoryID]{
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
}`,
    { categoryID }
  );
}
export async function getProductsByBrand(brandName: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'product' && brand.name == $brandName]{
      _id,
      name,
      price,
      'brand': brand,
      ratings,
      discount,
      'slug': slug.current,
      category->{
        name,
        parentCategory->{name}
      },
      'image': image.asset->url
    }`,
    { brandName } // Pass the variable as an object
  );
}
