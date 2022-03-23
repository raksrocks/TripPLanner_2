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

export const FoodPlaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
