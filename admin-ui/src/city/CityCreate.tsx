import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FoodPlaceTitle } from "../foodPlace/FoodPlaceTitle";
import { StartStopPlaceTitle } from "../startStopPlace/StartStopPlaceTitle";

export const CityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="Country" source="country" />
        <ReferenceArrayInput
          source="foodplace"
          reference="FoodPlace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FoodPlaceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="startstopplace"
          reference="StartStopPlace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StartStopPlaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
