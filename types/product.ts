export interface Product {
  image: string;
  discount: null;
  name: string;
  price: number;
  brand: Brand;
  slug: string;
  ratings: Ratings;
  category: Category;
  _id: string;
}

export interface Brand {
  name: string;
  slug: Slug;
}

export interface Slug {
  current: string;
  _type: string;
}

export interface Category {
  name: string;
  id: string;
  image: {
    url: string;
    alt: string;
  };
  parentCategory: ParentCategory;
}

export interface ParentCategory {
  name: string;
}

export interface Ratings {
  totalRatings: number;
  avgRating: number;
  numberOfPeople: number;
}
