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

export const FoodPlaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FoodPlaces"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="City" source="city.id" reference="City">
          <TextField source={CITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="geolocation" source="geolocation" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="rating" source="rating" />
        <TextField label="typeoffood" source="typeoffood" />
        <TextField label="typicalTimespent" source="typicalTimespent" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
