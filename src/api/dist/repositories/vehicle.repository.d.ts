import { DefaultCrudRepository } from '@loopback/repository';
import { Vehicle } from '../models';
import { MysqlDataSource } from '../datasources/mysql.datasource';
export declare class VehicleRepository extends DefaultCrudRepository<Vehicle, typeof Vehicle.prototype.id> {
    constructor(dataSource: MysqlDataSource);
}
