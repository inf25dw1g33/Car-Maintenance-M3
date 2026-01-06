import { Entity } from '@loopback/repository';
import { Owner } from './owner.model';
import { ServiceRecord } from './service-record.model';
export declare class Vehicle extends Entity {
    id?: number;
    ownerId: number;
    brand: string;
    model: string;
    licensePlate: string;
    year?: number;
    serviceRecords: ServiceRecord[];
    constructor(data?: Partial<Vehicle>);
}
export interface VehicleRelations {
    owner?: Owner;
    serviceRecords?: ServiceRecord[];
}
export type VehicleWithRelations = Vehicle & VehicleRelations;
