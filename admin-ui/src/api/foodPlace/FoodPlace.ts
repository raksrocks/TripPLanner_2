import { City } from "../city/City";

export type FoodPlace = {
  city?: City | null;
  createdAt: Date;
  geolocation: string | null;
  id: string;
  name: string | null;
  typeoffood: string | null;
  typicalTimespent: string | null;
  updatedAt: Date;
};
