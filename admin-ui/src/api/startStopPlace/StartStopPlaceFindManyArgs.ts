import { StartStopPlaceWhereInput } from "./StartStopPlaceWhereInput";
import { StartStopPlaceOrderByInput } from "./StartStopPlaceOrderByInput";

export type StartStopPlaceFindManyArgs = {
  where?: StartStopPlaceWhereInput;
  orderBy?: Array<StartStopPlaceOrderByInput>;
  skip?: number;
  take?: number;
};
