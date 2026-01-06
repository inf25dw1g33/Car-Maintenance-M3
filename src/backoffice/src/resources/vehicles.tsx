import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, Create } from 'react-admin';

export const VehicleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="ownerId" reference="owners" label="Proprietário"><TextField source="name" /></ReferenceField>
      <TextField source="brand" label="Marca" />
      <TextField source="model" label="Modelo" />
      <TextField source="licensePlate" label="Matrícula" />
      <NumberField source="year" label="Ano" />
      <EditButton />
    </Datagrid>
  </List>
);

export const VehicleEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="ownerId" reference="owners" label="Proprietário"><SelectInput optionText="name" /></ReferenceInput>
      <TextInput source="brand" label="Marca" />
      <TextInput source="model" label="Modelo" />
      <TextInput source="licensePlate" label="Matrícula" />
      <NumberInput source="year" label="Ano" />
    </SimpleForm>
  </Edit>
);

export const VehicleCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="ownerId" reference="owners" label="Proprietário"><SelectInput optionText="name" /></ReferenceInput>
      <TextInput source="brand" label="Marca" />
      <TextInput source="model" label="Modelo" />
      <TextInput source="licensePlate" label="Matrícula" />
      <NumberInput source="year" label="Ano" />
    </SimpleForm>
  </Create>
);
