export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "brand",
      title: "Brand",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "brand.name" },
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0).max(100),
      description: "This value should be between 0 and 100",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "ratings",
      title: "Ratings",
      type: "object",
      fields: [
        {
          name: "avgRating",
          title: "Average Rating",
          type: "number",
          initialValue: "0",
          validation: (Rule: any) => Rule.required().min(0).max(5),
        },
        {
          name: "totalRatings",
          title: "Total Ratings",
          type: "number",
          initialValue: "0",
        },
        {
          name: "numberOfPeople",
          title: "Number of people Rated",
          type: "number",
          initialValue: "0",
        },
      ],
    },
  ],
};
