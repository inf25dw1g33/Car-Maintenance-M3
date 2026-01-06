import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  Create,
} from 'react-admin';

export const ServiceRecordList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />

      <ReferenceField source="vehicleId" reference="vehicles" label="Veículo">
        <TextField source="licensePlate" />
      </ReferenceField>

      <ReferenceField source="serviceTypeId" reference="service-types" label="Tipo de Serviço">
        <TextField source="name" />
      </ReferenceField>

      <DateField source="serviceDate" label="Data" />
      <NumberField source="mileageKm" label="Quilómetros" />
      <NumberField source="cost" label="Custo (€)" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ServiceRecordEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="vehicleId" reference="vehicles" label="Veículo">
        <SelectInput optionText="licensePlate" />
      </ReferenceInput>

      <ReferenceInput source="serviceTypeId" reference="service-types" label="Tipo de Serviço">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <DateInput source="serviceDate" label="Data" />
      <NumberInput source="mileageKm" label="Quilómetros" />
      <NumberInput source="cost" label="Custo (€)" />
      <TextInput source="notes" label="Notas" multiline />
    </SimpleForm>
  </Edit>
);

export const ServiceRecordCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="vehicleId" reference="vehicles" label="Veículo">
        <SelectInput optionText="licensePlate" />
      </ReferenceInput>

      <ReferenceInput source="serviceTypeId" reference="service-types" label="Tipo de Serviço">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <DateInput source="serviceDate" label="Data" />
      <NumberInput source="mileageKm" label="Quilómetros" />
      <NumberInput source="cost" label="Custo (€)" />
      <TextInput source="notes" label="Notas" multiline />
    </SimpleForm>
  </Create>
);
