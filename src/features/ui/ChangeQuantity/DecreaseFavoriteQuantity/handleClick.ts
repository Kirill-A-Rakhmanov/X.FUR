import { useAppDispatch } from "@/app/store/hooks";
import { decrementFavoriteQuantity } from "@/entities/entities";

const dispatch = useAppDispatch();

export const handleClick = (article: string) => {
  dispatch(decrementFavoriteQuantity(article));
};
