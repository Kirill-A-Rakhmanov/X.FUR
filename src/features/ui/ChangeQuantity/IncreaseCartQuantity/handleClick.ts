import { useAppDispatch } from "@/app/store/hooks";
import { incrementCartQuantity } from "@/entities/entities";

const dispatch = useAppDispatch();

export const handleClick = (article: string) => {
  dispatch(incrementCartQuantity(article));
};
