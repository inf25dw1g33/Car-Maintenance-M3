import { List, Datagrid, TextField, EmailField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const OwnerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nome" />
      <EmailField source="email" label="Email" />
      <TextField source="phone" label="Telefone" />
      <EditButton />
    </Datagrid>
  </List>
);

export const OwnerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="email" label="Email" />
      <TextInput source="phone" label="Telefone" />
    </SimpleForm>
  </Edit>
);

export const OwnerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="email" label="Email" />
      <TextInput source="phone" label="Telefone" />
    </SimpleForm>
  </Create>
);
