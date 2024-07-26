import { useAppDispatch } from "@/app/store/hooks";
import { decrementCartQuantity } from "@/entities/entities";

const dispatch = useAppDispatch();

export const handleClick = (article: string) => {
  dispatch(decrementCartQuantity(article));
};
