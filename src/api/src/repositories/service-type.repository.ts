import { inject, Getter } from '@loopback/core';
import { DefaultCrudRepository, repository, HasManyRepositoryFactory } from '@loopback/repository';
import { MysqlDataSource } from '../datasources/mysql.datasource';  // Corrigido o caminho de importação
import { ServiceType, ServiceTypeRelations, ServiceRecord } from '../models';
import { ServiceRecordRepository } from './service-record.repository';

export class ServiceTypeRepository extends DefaultCrudRepository<
  ServiceType,
  typeof ServiceType.prototype.id,
  ServiceTypeRelations
> {
  public readonly serviceRecords: HasManyRepositoryFactory<
    ServiceRecord,
    typeof ServiceType.prototype.id
  >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,  // Injeção do MysqlDataSource
    @repository.getter('ServiceRecordRepository')
    protected serviceRecordRepositoryGetter: Getter<ServiceRecordRepository>,
  ) {
    super(ServiceType, dataSource);

    // Criação da relação HasMany com o repositório de ServiceRecord
    this.serviceRecords = this.createHasManyRepositoryFactoryFor(
      'serviceRecords',
      serviceRecordRepositoryGetter,
    );
    this.registerInclusionResolver('serviceRecords', this.serviceRecords.inclusionResolver);
  }
}
