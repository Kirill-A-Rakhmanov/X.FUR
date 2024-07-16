type tItems = tItem[];

type tItem = {
  title: string;
  subtitle: string;
  size?: string;
  description: string;
  type: string;
  rating: number;
  collection: string[];
  colors: tColor[];
  measurements: tMeasurements;
};

type tColor = {
  article: string;
  name: string;
  price: number;
  images: string[];
};

type tMeasurements = {
  image?: string;
  length?: string;
  width?: string;
  heigth?: string;
  depth?: string;
};
