import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CITY_TITLE_FIELD } from "./CityTitle";

export const CityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FoodPlace"
          target="CityId"
          label="FoodPlaces"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="City" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="geolocation" source="geolocation" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="typeoffood" source="typeoffood" />
            <TextField label="typicalTimespent" source="typicalTimespent" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StartStopPlace"
          target="CityId"
          label="Start_Stop_Places"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
