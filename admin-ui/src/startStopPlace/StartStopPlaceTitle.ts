import { StartStopPlace as TStartStopPlace } from "../api/startStopPlace/StartStopPlace";

export const STARTSTOPPLACE_TITLE_FIELD = "name";

export const StartStopPlaceTitle = (record: TStartStopPlace): string => {
  return record.name || record.id;
};
