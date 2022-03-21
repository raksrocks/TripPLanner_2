import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const StartStopPlaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Start_Stop_Places"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="City" source="city.id" reference="City">
          <TextField source={CITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="closesAt" source="closesAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="geolocation" source="geolocation" />
        <TextField label="ID" source="id" />
        <TextField label="lastAvailable" source="lastAvailable" />
        <TextField label="name" source="name" />
        <TextField label="opensAt" source="opensAt" />
        <TextField label="TypeOfPlace" source="typeOfPlace" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
