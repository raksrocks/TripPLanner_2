import { AttractionWhereInput } from "./AttractionWhereInput";
import { AttractionOrderByInput } from "./AttractionOrderByInput";

export type AttractionFindManyArgs = {
  where?: AttractionWhereInput;
  orderBy?: Array<AttractionOrderByInput>;
  skip?: number;
  take?: number;
};
