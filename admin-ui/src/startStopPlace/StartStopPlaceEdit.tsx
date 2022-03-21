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

export const StartStopPlaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="closesAt" source="closesAt" />
        <TextInput label="geolocation" source="geolocation" />
        <TextInput label="lastAvailable" source="lastAvailable" />
        <TextInput label="name" source="name" />
        <TextInput label="opensAt" source="opensAt" />
        <TextInput label="TypeOfPlace" source="typeOfPlace" />
      </SimpleForm>
    </Edit>
  );
};
