import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StartStopPlaceWhereInput = {
  city?: CityWhereUniqueInput;
  closesAt?: StringNullableFilter;
  geolocation?: StringNullableFilter;
  id?: StringFilter;
  lastAvailable?: StringNullableFilter;
  name?: StringNullableFilter;
  opensAt?: StringNullableFilter;
  typeOfPlace?: StringNullableFilter;
};
