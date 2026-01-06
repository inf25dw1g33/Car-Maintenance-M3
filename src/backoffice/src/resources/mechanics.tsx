import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from 'react-admin';

export const MechanicList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nome" />
      <TextField source="specialization" label="Especialização" />
      <TextField source="phone" label="Telefone" />
      <EmailField source="email" label="Email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const MechanicEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <TextInput source="specialization" label="Especialização" />
      <TextInput source="phone" label="Telefone" />
      <TextInput source="email" label="Email" />
    </SimpleForm>
  </Edit>
);

export const MechanicCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nome" required />
      <TextInput source="specialization" label="Especialização" />
      <TextInput source="phone" label="Telefone" />
      <TextInput source="email" label="Email" />
    </SimpleForm>
  </Create>
);
