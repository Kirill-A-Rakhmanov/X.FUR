export type tItem = {
  id: string;
  title: string;
  subtitle: string;
  size?: string;
  description: string;
  category: string;
  rating: number;
  basePrice: number;
  articles: string[];
  collection: string[];
  colors: tColor[];
  measurements: tMeasurements;
};

export type tColor = {
  article: string;
  color: string;
  price: number;
  images: string[];
};

export type tMeasurements = {
  image?: string;
  length?: string;
  width?: string;
  heigth?: string;
  depth?: string;
};

export type queryParams = {
  sortby?: string;
  orderby?: string;
  order?: "asc" | "desc";
  page?: string;
  limit?: string;
  collection?: string;
  category?: string;
};

export type tItemCard = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  article: string;
  image: string;
};
