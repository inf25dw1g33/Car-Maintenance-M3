import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { ServiceRecord, ServiceRecordRelations, Vehicle, ServiceType } from '../models';
import { VehicleRepository } from './vehicle.repository';
import { ServiceTypeRepository } from './service-type.repository';
export declare class ServiceRecordRepository extends DefaultCrudRepository<ServiceRecord, typeof ServiceRecord.prototype.id, ServiceRecordRelations> {
    protected vehicleRepositoryGetter: Getter<VehicleRepository>;
    protected serviceTypeRepositoryGetter: Getter<ServiceTypeRepository>;
    readonly vehicle: BelongsToAccessor<Vehicle, typeof ServiceRecord.prototype.id>;
    readonly serviceType: BelongsToAccessor<ServiceType, typeof ServiceRecord.prototype.id>;
    constructor(dataSource: MysqlDataSource, // Injeção do MysqlDataSource
    vehicleRepositoryGetter: Getter<VehicleRepository>, // Injeção do VehicleRepository
    serviceTypeRepositoryGetter: Getter<ServiceTypeRepository>);
}
