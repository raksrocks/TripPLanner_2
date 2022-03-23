import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type FoodPlaceCreateInput = {
  city?: CityWhereUniqueInput | null;
  geolocation?: string | null;
  name?: string | null;
  rating?: number | null;
  typeoffood?: string | null;
  typicalTimespent?: string | null;
};
