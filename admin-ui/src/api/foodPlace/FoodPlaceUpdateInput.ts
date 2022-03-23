import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type FoodPlaceUpdateInput = {
  city?: CityWhereUniqueInput | null;
  geolocation?: string | null;
  name?: string | null;
  rating?: number | null;
  typeoffood?: string | null;
  typicalTimespent?: string | null;
};
