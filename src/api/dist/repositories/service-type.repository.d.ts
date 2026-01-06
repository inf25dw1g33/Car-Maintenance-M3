import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MysqlDataSource } from '../datasources/mysql.datasource';
import { ServiceType, ServiceTypeRelations, ServiceRecord } from '../models';
import { ServiceRecordRepository } from './service-record.repository';
export declare class ServiceTypeRepository extends DefaultCrudRepository<ServiceType, typeof ServiceType.prototype.id, ServiceTypeRelations> {
    protected serviceRecordRepositoryGetter: Getter<ServiceRecordRepository>;
    readonly serviceRecords: HasManyRepositoryFactory<ServiceRecord, typeof ServiceType.prototype.id>;
    constructor(dataSource: MysqlDataSource, // Injeção do MysqlDataSource
    serviceRecordRepositoryGetter: Getter<ServiceRecordRepository>);
}
