export const productQuery = `*[_type == "product"]{
    _id,
    name,
    slug,
    image1,
    image2,
    image3,
    price,
    partNumber,
    inStock
  }`
  