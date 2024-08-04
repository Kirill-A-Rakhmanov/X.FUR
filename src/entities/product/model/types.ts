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

export type tItemCard = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  size?: string;
  price: number;
  article: string;
  image: string;
  quantity?: number;
};

export type tSetQuantity = {
  article: string;
  quantity: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
