import { SortOrder } from "../../util/SortOrder";

export type StartStopPlaceOrderByInput = {
  cityId?: SortOrder;
  closesAt?: SortOrder;
  createdAt?: SortOrder;
  geolocation?: SortOrder;
  id?: SortOrder;
  lastAvailable?: SortOrder;
  name?: SortOrder;
  opensAt?: SortOrder;
  typeOfPlace?: SortOrder;
  updatedAt?: SortOrder;
};
