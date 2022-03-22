import { FoodPlace } from "../foodPlace/FoodPlace";
import { StartStopPlace } from "../startStopPlace/StartStopPlace";

export type City = {
  code: string | null;
  country: string | null;
  createdAt: Date;
  foodPlaces?: Array<FoodPlace>;
  id: string;
  name: string | null;
  startStopPlaces?: Array<StartStopPlace>;
  updatedAt: Date;
};
