import { FoodPlace as TFoodPlace } from "../api/foodPlace/FoodPlace";

export const FOODPLACE_TITLE_FIELD = "name";

export const FoodPlaceTitle = (record: TFoodPlace): string => {
  return record.name || record.id;
};
