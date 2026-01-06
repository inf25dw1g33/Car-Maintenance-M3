import {Entity, model, property, hasMany} from '@loopback/repository';
import {ServiceRecord} from './service-record.model';

@model({
  settings: {
    mysql: {table: 'service_types'},
  },
})
export class ServiceType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    mysql: {
      columnName: 'name',
      dataType: 'varchar',
      dataLength: 100,
    },
  })
  name: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'description',
      dataType: 'varchar',
      dataLength: 255,
    },
  })
  description?: string;

  @hasMany(() => ServiceRecord, {keyTo: 'serviceTypeId'})
  serviceRecords: ServiceRecord[];

  constructor(data?: Partial<ServiceType>) {
    super(data);
  }
}

export interface ServiceTypeRelations {
  serviceRecords?: ServiceRecord[];
}

export type ServiceTypeWithRelations = ServiceType & ServiceTypeRelations;
