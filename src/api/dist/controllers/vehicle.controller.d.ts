import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vehicle } from '../models';
import { VehicleRepository } from '../repositories';
export declare class VehicleController {
    vehicleRepository: VehicleRepository;
    constructor(vehicleRepository: VehicleRepository);
    create(vehicle: Omit<Vehicle, 'id'>): Promise<Vehicle>;
    count(where?: Where<Vehicle>): Promise<Count>;
    find(filter?: Filter<Vehicle>): Promise<Vehicle[]>;
    findById(id: number, filter?: FilterExcludingWhere<Vehicle>): Promise<Vehicle>;
    updateById(id: number, vehicle: Vehicle): Promise<void>;
    replaceById(id: number, vehicle: Vehicle): Promise<void>;
    deleteById(id: number): Promise<void>;
}
