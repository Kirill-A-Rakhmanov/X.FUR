import { tItemCard } from "./../model/types";
import { tItem } from "../product";

export const mapProductDataByArticle = (data: tItem, article: string) => {
  const index = data.articles.indexOf(article);

  const obj: tItemCard = {
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    size: data.size,
    price: data.colors[index].price,
    article: article,
    color: data.colors[index].color,
    image: data.colors[index].images[0],
  };
  return obj;
};
