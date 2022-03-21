import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FoodPlaceWhereInput = {
  city?: CityWhereUniqueInput;
  geolocation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeoffood?: StringNullableFilter;
  typicalTimespent?: StringNullableFilter;
};
