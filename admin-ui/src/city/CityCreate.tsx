import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="Country" source="country" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
