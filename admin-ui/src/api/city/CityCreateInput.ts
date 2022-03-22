import { FoodPlaceCreateNestedManyWithoutCitiesInput } from "./FoodPlaceCreateNestedManyWithoutCitiesInput";
import { StartStopPlaceCreateNestedManyWithoutCitiesInput } from "./StartStopPlaceCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  code?: string | null;
  country?: string | null;
  foodPlaces?: FoodPlaceCreateNestedManyWithoutCitiesInput;
  name?: string | null;
  startStopPlaces?: StartStopPlaceCreateNestedManyWithoutCitiesInput;
};
