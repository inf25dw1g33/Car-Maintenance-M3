import { Entity } from '@loopback/repository';
import { Vehicle } from './vehicle.model';
export declare class Owner extends Entity {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    vehicles: Vehicle[];
    constructor(data?: Partial<Owner>);
}
export interface OwnerRelations {
    vehicles?: Vehicle[];
}
export type OwnerWithRelations = Owner & OwnerRelations;
