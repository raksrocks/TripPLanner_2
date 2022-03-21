import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const StartStopPlaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
