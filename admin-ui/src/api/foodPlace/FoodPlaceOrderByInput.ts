import { SortOrder } from "../../util/SortOrder";

export type FoodPlaceOrderByInput = {
  cityId?: SortOrder;
  closes?: SortOrder;
  createdAt?: SortOrder;
  geolocation?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  opens?: SortOrder;
  rating?: SortOrder;
  typeoffood?: SortOrder;
  typicalTimespent?: SortOrder;
  updatedAt?: SortOrder;
};
