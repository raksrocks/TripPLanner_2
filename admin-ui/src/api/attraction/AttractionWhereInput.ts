import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AttractionWhereInput = {
  city?: CityWhereUniqueInput;
  closes?: StringNullableFilter;
  id?: StringFilter;
  opens?: DateTimeNullableFilter;
  typicalTimeSpent?: FloatNullableFilter;
};
