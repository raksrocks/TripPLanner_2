import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FoodPlaceWhereInput = {
  city?: CityWhereUniqueInput;
  closes?: StringNullableFilter;
  geolocation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opens?: StringNullableFilter;
  rating?: IntNullableFilter;
  typeoffood?: StringNullableFilter;
  typicalTimespent?: StringNullableFilter;
};
