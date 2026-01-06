// src/App.tsx
import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { edigciaTheme } from './theme';
import { authProvider } from './authProvider';
import { LoginPage } from './LoginPage';

import { OwnerList, OwnerEdit, OwnerCreate } from './resources/owners';
import { VehicleList, VehicleEdit, VehicleCreate } from './resources/vehicles';
import { ServiceTypeList, ServiceTypeEdit, ServiceTypeCreate } from './resources/serviceTypes';
import { ServiceRecordList, ServiceRecordEdit, ServiceRecordCreate } from './resources/serviceRecords';
import { MechanicList, MechanicEdit, MechanicCreate } from './resources/mechanics';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    theme={edigciaTheme}
    authProvider={authProvider}
    loginPage={LoginPage}
    requireAuth
  >
    <Resource name="owners" options={{ label: 'Proprietários' }} list={OwnerList} edit={OwnerEdit} create={OwnerCreate} />
    <Resource name="vehicles" options={{ label: 'Veículos' }} list={VehicleList} edit={VehicleEdit} create={VehicleCreate} />
    <Resource name="service-types" options={{ label: 'Tipos de Serviço' }} list={ServiceTypeList} edit={ServiceTypeEdit} create={ServiceTypeCreate} />
    <Resource name="service-records" options={{ label: 'Registos de Manutenção' }} list={ServiceRecordList} edit={ServiceRecordEdit} create={ServiceRecordCreate} />
    <Resource name="mechanics" options={{ label: 'Mecânicos' }} list={MechanicList} edit={MechanicEdit} create={MechanicCreate} />
  </Admin>
);

export default App;
