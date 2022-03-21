import { City } from "../city/City";

export type StartStopPlace = {
  city?: City | null;
  closesAt: string | null;
  createdAt: Date;
  geolocation: string | null;
  id: string;
  lastAvailable: string | null;
  name: string | null;
  opensAt: string | null;
  typeOfPlace: string | null;
  updatedAt: Date;
};
