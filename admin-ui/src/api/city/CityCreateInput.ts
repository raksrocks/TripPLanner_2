import { AttractionCreateNestedManyWithoutCitiesInput } from "./AttractionCreateNestedManyWithoutCitiesInput";
import { FoodPlaceCreateNestedManyWithoutCitiesInput } from "./FoodPlaceCreateNestedManyWithoutCitiesInput";
import { StartStopPlaceCreateNestedManyWithoutCitiesInput } from "./StartStopPlaceCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  attractions?: AttractionCreateNestedManyWithoutCitiesInput;
  code?: string | null;
  country?: string | null;
  foodPlaces?: FoodPlaceCreateNestedManyWithoutCitiesInput;
  name?: string | null;
  startStopPlaces?: StartStopPlaceCreateNestedManyWithoutCitiesInput;
};
