import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AttractionWhereInput = {
  city?: StringNullableFilter;
  closes?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opens?: StringNullableFilter;
  rating?: FloatNullableFilter;
  ratingsCount?: IntNullableFilter;
  typicalTimeSpent?: FloatNullableFilter;
};
