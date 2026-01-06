import { Entity } from '@loopback/repository';
import { ServiceRecord } from './service-record.model';
export declare class ServiceType extends Entity {
    id?: number;
    name: string;
    description?: string;
    serviceRecords: ServiceRecord[];
    constructor(data?: Partial<ServiceType>);
}
export interface ServiceTypeRelations {
    serviceRecords?: ServiceRecord[];
}
export type ServiceTypeWithRelations = ServiceType & ServiceTypeRelations;
