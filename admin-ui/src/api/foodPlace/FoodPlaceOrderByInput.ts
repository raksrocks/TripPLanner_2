import { SortOrder } from "../../util/SortOrder";

export type FoodPlaceOrderByInput = {
  cityId?: SortOrder;
  createdAt?: SortOrder;
  geolocation?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeoffood?: SortOrder;
  typicalTimespent?: SortOrder;
  updatedAt?: SortOrder;
};
