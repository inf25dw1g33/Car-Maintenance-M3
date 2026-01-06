import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { Mechanic } from '../models';
import { MechanicRepository } from '../repositories';
export declare class MechanicController {
    mechanicRepository: MechanicRepository;
    constructor(mechanicRepository: MechanicRepository);
    create(mechanic: Omit<Mechanic, 'id'>): Promise<Mechanic>;
    find(filter?: Filter<Mechanic>): Promise<Mechanic[]>;
    findById(id: number, filter?: FilterExcludingWhere<Mechanic>): Promise<Mechanic>;
    updateById(id: number, mechanic: Mechanic): Promise<void>;
    deleteById(id: number): Promise<void>;
}
