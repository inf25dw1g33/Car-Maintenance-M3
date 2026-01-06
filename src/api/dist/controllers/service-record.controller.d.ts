import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { ServiceRecord } from '../models';
import { ServiceRecordRepository } from '../repositories';
export declare class ServiceRecordController {
    serviceRecordRepository: ServiceRecordRepository;
    constructor(serviceRecordRepository: ServiceRecordRepository);
    create(serviceRecord: Omit<ServiceRecord, 'id'>): Promise<ServiceRecord>;
    find(filter?: Filter<ServiceRecord>): Promise<ServiceRecord[]>;
    findById(id: number, filter?: FilterExcludingWhere<ServiceRecord>): Promise<ServiceRecord>;
    updateById(id: number, serviceRecord: ServiceRecord): Promise<void>;
    deleteById(id: number): Promise<void>;
}
