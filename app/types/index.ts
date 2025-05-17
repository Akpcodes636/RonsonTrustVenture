export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;          // number if you want numeric price
  text: string | null;
  image1?: {
    asset: {
      url: string;
    };
  };
  image2?: {
    asset: {
      url: string;
    };
  };
  image3?: {
    asset: {
      url: string;
    };
  };
  partNumber: string;
  inStock: boolean;
  description?: string;    // optional if not always present
}
