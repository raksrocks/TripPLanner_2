import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AttractionWhereInput = {
  city?: StringNullableFilter;
  closes?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opens?: StringNullableFilter;
  typicalTimeSpent?: FloatNullableFilter;
};
