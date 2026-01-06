import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Owner} from './owner.model';
import {ServiceRecord} from './service-record.model';

@model({
  settings: {
    mysql: {table: 'vehicles'},
  },
})
export class Vehicle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(
  () => Owner,
  {name: 'owner'},
  {mysql: {columnName: 'owner_id', dataType: 'int'}},
)
ownerId: number;


  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'brand',
      dataType: 'varchar',
      dataLength: 50,
    },
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'model',
      dataType: 'varchar',
      dataLength: 50,
    },
  })
  model: string;

  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'license_plate',
      dataType: 'varchar',
      dataLength: 20,
    },
  })
  licensePlate: string;

  @property({
    type: 'number',
    mysql: {
      columnName: 'year',
      dataType: 'int',
    },
  })
  year?: number;

  @hasMany(() => ServiceRecord, {keyTo: 'vehicleId'})
  serviceRecords: ServiceRecord[];

  constructor(data?: Partial<Vehicle>) {
    super(data);
  }
}

export interface VehicleRelations {
  owner?: Owner;
  serviceRecords?: ServiceRecord[];
}

export type VehicleWithRelations = Vehicle & VehicleRelations;
