import { tColor, tItem } from "../product";

export const mapImagesByArticle = (data: tItem, article: string) => {
  const findItem: tColor = data.colors.find((obj) => obj.article === article);
  if (findItem) {
    const images: string[] = findItem.images;

    return data.measurements.image
      ? [...images, data.measurements.image]
      : images;
  }
  return [];
};
