import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AttractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Closes" source="closes" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <TextInput label="Opens" source="opens" />
        <NumberInput label="TypicalTimeSpent" source="typicalTimeSpent" />
      </SimpleForm>
    </Edit>
  );
};
