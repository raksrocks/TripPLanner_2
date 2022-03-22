import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AttractionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Closes" source="closes" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <TextInput label="Opens" source="opens" />
        <NumberInput label="TypicalTimeSpent" source="typicalTimeSpent" />
      </SimpleForm>
    </Create>
  );
};
