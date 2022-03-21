import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type AttractionCreateInput = {
  city?: CityWhereUniqueInput | null;
  closes?: string | null;
  opens?: Date | null;
  typicalTimeSpent?: number | null;
};
