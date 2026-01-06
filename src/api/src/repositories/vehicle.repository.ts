// src/repositories/vehicle.repository.ts
import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { Vehicle } from '../models';
import { MysqlDataSource } from '../datasources/mysql.datasource';  // Conector para o banco de dados

export class VehicleRepository extends DefaultCrudRepository<
  Vehicle,
  typeof Vehicle.prototype.id
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(Vehicle, dataSource);
  }
}
