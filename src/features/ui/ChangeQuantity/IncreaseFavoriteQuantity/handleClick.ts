import { useAppDispatch } from "@/app/store/hooks";
import { incrementFavoriteQuantity } from "@/entities/entities";

const dispatch = useAppDispatch();

export const handleClick = (article: string) => {
  dispatch(incrementFavoriteQuantity(article));
};
