import { FoodPlaceUpdateManyWithoutCitiesInput } from "./FoodPlaceUpdateManyWithoutCitiesInput";
import { StartStopPlaceUpdateManyWithoutCitiesInput } from "./StartStopPlaceUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  code?: string | null;
  country?: string | null;
  foodPlaces?: FoodPlaceUpdateManyWithoutCitiesInput;
  name?: string | null;
  startStopPlaces?: StartStopPlaceUpdateManyWithoutCitiesInput;
};
