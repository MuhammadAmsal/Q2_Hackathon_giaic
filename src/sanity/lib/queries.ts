import { defineQuery } from "next-sanity"

export const allproducts=defineQuery(`
    *[_type=='product']{
    _id,
    name,
    description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl":image.asset->url
    }
    `)
export const fourProduct=defineQuery(`
    *[_type=='product'][0..3]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl":image.asset->url
    }
    `)