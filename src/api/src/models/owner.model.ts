import {Entity, model, property, hasMany} from '@loopback/repository';
import {Vehicle} from './vehicle.model';

@model({
  settings: {
    mysql: {table: 'owners'},
  },
})
export class Owner extends Entity {
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
    required: true,
    mysql: {
      columnName: 'email',
      dataType: 'varchar',
      dataLength: 100,
    },
  })
  email: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'phone',
      dataType: 'varchar',
      dataLength: 30,
    },
  })
  phone?: string;

  @hasMany(() => Vehicle, {keyTo: 'ownerId'})
  vehicles: Vehicle[];

  constructor(data?: Partial<Owner>) {
    super(data);
  }
}

export interface OwnerRelations {
  vehicles?: Vehicle[];
}

export type OwnerWithRelations = Owner & OwnerRelations;
