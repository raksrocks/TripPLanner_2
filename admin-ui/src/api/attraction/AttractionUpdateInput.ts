import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type AttractionUpdateInput = {
  city?: CityWhereUniqueInput | null;
  closes?: string | null;
  opens?: Date | null;
  typicalTimeSpent?: number | null;
};
