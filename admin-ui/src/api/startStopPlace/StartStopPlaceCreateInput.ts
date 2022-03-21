import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type StartStopPlaceCreateInput = {
  city?: CityWhereUniqueInput | null;
  closesAt?: string | null;
  geolocation?: string | null;
  lastAvailable?: string | null;
  name?: string | null;
  opensAt?: string | null;
  typeOfPlace?: string | null;
};
