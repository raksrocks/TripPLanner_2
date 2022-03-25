import { City } from "../city/City";

export type FoodPlace = {
  city?: City | null;
  closes: string | null;
  createdAt: Date;
  geolocation: string | null;
  id: string;
  name: string | null;
  opens: string | null;
  rating: number | null;
  typeoffood: string | null;
  typicalTimespent: number | null;
  updatedAt: Date;
};
