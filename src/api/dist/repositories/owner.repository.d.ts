import { DefaultCrudRepository } from '@loopback/repository';
import { Owner } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class OwnerRepository extends DefaultCrudRepository<Owner, typeof Owner.prototype.id> {
    constructor(dataSource: MysqlDataSource);
}
