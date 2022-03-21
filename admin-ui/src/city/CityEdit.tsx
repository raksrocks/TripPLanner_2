import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="Country" source="country" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
