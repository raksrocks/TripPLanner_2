import { AttractionUpdateManyWithoutCitiesInput } from "./AttractionUpdateManyWithoutCitiesInput";
import { FoodPlaceUpdateManyWithoutCitiesInput } from "./FoodPlaceUpdateManyWithoutCitiesInput";
import { StartStopPlaceUpdateManyWithoutCitiesInput } from "./StartStopPlaceUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  attractions?: AttractionUpdateManyWithoutCitiesInput;
  code?: string | null;
  country?: string | null;
  foodPlaces?: FoodPlaceUpdateManyWithoutCitiesInput;
  name?: string | null;
  startStopPlaces?: StartStopPlaceUpdateManyWithoutCitiesInput;
};
