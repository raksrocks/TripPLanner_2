import { FoodPlaceWhereInput } from "./FoodPlaceWhereInput";
import { FoodPlaceOrderByInput } from "./FoodPlaceOrderByInput";

export type FoodPlaceFindManyArgs = {
  where?: FoodPlaceWhereInput;
  orderBy?: Array<FoodPlaceOrderByInput>;
  skip?: number;
  take?: number;
};
