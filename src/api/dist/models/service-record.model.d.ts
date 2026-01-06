import { Entity } from '@loopback/repository';
import { Vehicle } from './vehicle.model';
import { ServiceType } from './service-type.model';
export declare class ServiceRecord extends Entity {
    id?: number;
    vehicleId: number;
    serviceTypeId: number;
    serviceDate: string;
    mileageKm: number;
    cost: number;
    notes?: string;
    constructor(data?: Partial<ServiceRecord>);
}
export interface ServiceRecordRelations {
    vehicle?: Vehicle;
    serviceType?: ServiceType;
}
export type ServiceRecordWithRelations = ServiceRecord & ServiceRecordRelations;
