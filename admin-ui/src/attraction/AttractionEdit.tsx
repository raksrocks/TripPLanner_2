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
        <NumberInput label="rating" source="rating" />
        <NumberInput step={1} label="ratings_count" source="ratingsCount" />
        <NumberInput label="TypicalTimeSpent" source="typicalTimeSpent" />
      </SimpleForm>
    </Edit>
  );
};
