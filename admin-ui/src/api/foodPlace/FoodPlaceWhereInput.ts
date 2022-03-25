import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FoodPlaceWhereInput = {
  city?: CityWhereUniqueInput;
  closes?: StringNullableFilter;
  geolocation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opens?: StringNullableFilter;
  rating?: IntNullableFilter;
  typeoffood?: StringNullableFilter;
  typicalTimespent?: FloatNullableFilter;
};
