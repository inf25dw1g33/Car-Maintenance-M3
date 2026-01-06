// src/repositories/mechanic.repository.ts
import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { Mechanic } from '../models';  // Certifique-se de que o modelo está importado corretamente
import { MysqlDataSource } from '../datasources';  // Caminho correto para o MysqlDataSource

export class MechanicRepository extends DefaultCrudRepository<
  Mechanic,
  typeof Mechanic.prototype.id
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(Mechanic, dataSource);  // Passando o modelo e o datasource
  }
}
