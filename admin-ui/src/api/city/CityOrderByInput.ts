import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  code?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
