import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ServiceTypeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nome" />
      <TextField source="description" label="Descrição" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ServiceTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="description" label="Descrição" multiline />
    </SimpleForm>
  </Edit>
);

export const ServiceTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="description" label="Descrição" multiline />
    </SimpleForm>
  </Create>
);
