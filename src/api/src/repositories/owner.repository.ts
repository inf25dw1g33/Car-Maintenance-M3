import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { Owner } from '../models';  // Certifique-se de que o modelo 'Owner' está sendo importado corretamente
import { MysqlDataSource } from '../datasources';  // Caminho correto para importar o MysqlDataSource

export class OwnerRepository extends DefaultCrudRepository<
  Owner,
  typeof Owner.prototype.id
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(Owner, dataSource);
  }
}
