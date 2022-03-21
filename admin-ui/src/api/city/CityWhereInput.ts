import { AttractionListRelationFilter } from "../attraction/AttractionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FoodPlaceListRelationFilter } from "../foodPlace/FoodPlaceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StartStopPlaceListRelationFilter } from "../startStopPlace/StartStopPlaceListRelationFilter";

export type CityWhereInput = {
  attractions?: AttractionListRelationFilter;
  code?: StringNullableFilter;
  country?: StringNullableFilter;
  foodPlaces?: FoodPlaceListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startStopPlaces?: StartStopPlaceListRelationFilter;
};
