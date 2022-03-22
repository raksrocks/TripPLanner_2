import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FoodPlaceListRelationFilter } from "../foodPlace/FoodPlaceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StartStopPlaceListRelationFilter } from "../startStopPlace/StartStopPlaceListRelationFilter";

export type CityWhereInput = {
  code?: StringNullableFilter;
  country?: StringNullableFilter;
  foodPlaces?: FoodPlaceListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startStopPlaces?: StartStopPlaceListRelationFilter;
};
