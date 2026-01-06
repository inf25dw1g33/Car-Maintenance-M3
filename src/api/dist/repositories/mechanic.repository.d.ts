import { DefaultCrudRepository } from '@loopback/repository';
import { Mechanic } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class MechanicRepository extends DefaultCrudRepository<Mechanic, typeof Mechanic.prototype.id> {
    constructor(dataSource: MysqlDataSource);
}
