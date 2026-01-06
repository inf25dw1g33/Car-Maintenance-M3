import { inject, Getter } from '@loopback/core';
import { DefaultCrudRepository, repository, BelongsToAccessor } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';  // Caminho correto para importar o MysqlDataSource
import { ServiceRecord, ServiceRecordRelations, Vehicle, ServiceType } from '../models';
import { VehicleRepository } from './vehicle.repository';
import { ServiceTypeRepository } from './service-type.repository';

export class ServiceRecordRepository extends DefaultCrudRepository<
  ServiceRecord,
  typeof ServiceRecord.prototype.id,
  ServiceRecordRelations
> {
  // Definindo as relações BelongsTo
  public readonly vehicle: BelongsToAccessor<Vehicle, typeof ServiceRecord.prototype.id>;
  public readonly serviceType: BelongsToAccessor<ServiceType, typeof ServiceRecord.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,  // Injeção do MysqlDataSource
    @repository.getter('VehicleRepository')
    protected vehicleRepositoryGetter: Getter<VehicleRepository>,  // Injeção do VehicleRepository
    @repository.getter('ServiceTypeRepository')
    protected serviceTypeRepositoryGetter: Getter<ServiceTypeRepository>,  // Injeção do ServiceTypeRepository
  ) {
    super(ServiceRecord, dataSource);

    // Criação da relação BelongsTo com o repositório de Vehicle
    this.vehicle = this.createBelongsToAccessorFor('vehicle', vehicleRepositoryGetter);
    this.registerInclusionResolver('vehicle', this.vehicle.inclusionResolver);

    // Criação da relação BelongsTo com o repositório de ServiceType
    this.serviceType = this.createBelongsToAccessorFor('serviceType', serviceTypeRepositoryGetter);
    this.registerInclusionResolver('serviceType', this.serviceType.inclusionResolver);
  }
}
