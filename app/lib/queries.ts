// lib/queries.js
export const fetchProductQuery = `*[_type == "product" && slug.current == $slug][0]{
    name,
    price,
    quantity,
    image
  }`
  