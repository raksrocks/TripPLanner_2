import { City } from "../city/City";

export type Attraction = {
  city?: City | null;
  closes: string | null;
  createdAt: Date;
  id: string;
  opens: Date | null;
  typicalTimeSpent: number | null;
  updatedAt: Date;
};
