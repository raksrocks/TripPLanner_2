import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type FoodPlaceCreateInput = {
  city?: CityWhereUniqueInput | null;
  closes?: string | null;
  geolocation?: string | null;
  name?: string | null;
  opens?: string | null;
  rating?: number | null;
  typeoffood?: string | null;
  typicalTimespent?: number | null;
};
