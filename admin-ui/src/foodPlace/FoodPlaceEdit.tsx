import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CityTitle } from "../city/CityTitle";

export const FoodPlaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="geolocation" source="geolocation" />
        <TextInput label="Name" source="name" />
        <TextInput label="typeoffood" source="typeoffood" />
        <TextInput label="typicalTimespent" source="typicalTimespent" />
      </SimpleForm>
    </Edit>
  );
};
