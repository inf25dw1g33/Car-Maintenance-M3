import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { ServiceType } from '../models';
import { ServiceTypeRepository } from '../repositories';
export declare class ServiceTypeController {
    serviceTypeRepository: ServiceTypeRepository;
    constructor(serviceTypeRepository: ServiceTypeRepository);
    create(serviceType: Omit<ServiceType, 'id'>): Promise<ServiceType>;
    find(filter?: Filter<ServiceType>): Promise<ServiceType[]>;
    findById(id: number, filter?: FilterExcludingWhere<ServiceType>): Promise<ServiceType>;
    updateById(id: number, serviceType: ServiceType): Promise<void>;
    deleteById(id: number): Promise<void>;
}
