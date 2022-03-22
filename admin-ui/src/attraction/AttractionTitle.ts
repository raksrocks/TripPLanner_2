import { Attraction as TAttraction } from "../api/attraction/Attraction";

export const ATTRACTION_TITLE_FIELD = "name";

export const AttractionTitle = (record: TAttraction): string => {
  return record.name || record.id;
};
