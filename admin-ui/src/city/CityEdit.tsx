import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FoodPlaceTitle } from "../foodPlace/FoodPlaceTitle";
import { StartStopPlaceTitle } from "../startStopPlace/StartStopPlaceTitle";

export const CityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="Country" source="country" />
        <ReferenceArrayInput
          source="foodPlaces"
          reference="FoodPlace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FoodPlaceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="startStopPlaces"
          reference="StartStopPlace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StartStopPlaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
