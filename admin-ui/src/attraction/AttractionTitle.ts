import { Attraction as TAttraction } from "../api/attraction/Attraction";

export const ATTRACTION_TITLE_FIELD = "closes";

export const AttractionTitle = (record: TAttraction): string => {
  return record.closes || record.id;
};
