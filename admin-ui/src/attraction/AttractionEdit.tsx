import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const AttractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <TextInput label="Closes" source="closes" />
        <DateTimeInput label="Opens" source="opens" />
        <NumberInput label="TypicalTimeSpent" source="typicalTimeSpent" />
      </SimpleForm>
    </Edit>
  );
};
