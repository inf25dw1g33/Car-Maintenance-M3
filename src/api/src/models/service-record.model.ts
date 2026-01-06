import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Vehicle} from './vehicle.model';
import {ServiceType} from './service-type.model';

@model({
  settings: {
    mysql: {table: 'service_records'},
  },
})
export class ServiceRecord extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

    @belongsTo(
  () => Vehicle,
  {name: 'vehicle'},
  {mysql: {columnName: 'vehicle_id', dataType: 'int'}},
)
vehicleId: number;

@belongsTo(
  () => ServiceType,
  {name: 'serviceType'},
  {mysql: {columnName: 'service_type_id', dataType: 'int'}},
)
serviceTypeId: number;



  @property({
    type: 'date',
    required: true,
    mysql: {
      columnName: 'service_date',
      dataType: 'date',
    },
  })
  serviceDate: string;

  @property({
    type: 'number',
    required: true,
    mysql: {
      columnName: 'mileage_km',
      dataType: 'int',
    },
  })
  mileageKm: number;

  @property({
    type: 'number',
    required: true,
    mysql: {
      columnName: 'cost',
      dataType: 'decimal',
      precision: 10,
      scale: 2,
    },
  })
  cost: number;

  @property({
    type: 'string',
    mysql: {
      columnName: 'notes',
      dataType: 'text',
    },
  })
  notes?: string;

  constructor(data?: Partial<ServiceRecord>) {
    super(data);
  }
}

export interface ServiceRecordRelations {
  vehicle?: Vehicle;
  serviceType?: ServiceType;
}

export type ServiceRecordWithRelations = ServiceRecord & ServiceRecordRelations;
