import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const FoodPlaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="closes" source="closes" />
        <TextInput label="geolocation" source="geolocation" />
        <TextInput label="Name" source="name" />
        <TextInput label="opens" source="opens" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="typeoffood" source="typeoffood" />
        <NumberInput label="typicalTimespent" source="typicalTimespent" />
      </SimpleForm>
    </Edit>
  );
};
