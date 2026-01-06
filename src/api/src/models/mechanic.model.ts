import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {table: 'mechanics'},
  },
})
export class Mechanic extends Entity {
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
      columnName: 'specialization',
      dataType: 'varchar',
      dataLength: 100,
    },
  })
  specialization?: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'phone',
      dataType: 'varchar',
      dataLength: 30,
    },
  })
  phone?: string;

  @property({
    type: 'string',
    mysql: {
      columnName: 'email',
      dataType: 'varchar',
      dataLength: 100,
    },
  })
  email?: string;

  constructor(data?: Partial<Mechanic>) {
    super(data);
  }
}

export interface MechanicRelations {
  // describe navigational properties here
}

export type MechanicWithRelations = Mechanic & MechanicRelations;
