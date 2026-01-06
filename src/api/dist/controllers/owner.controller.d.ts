import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Owner } from '../models';
import { OwnerRepository } from '../repositories/owner.repository';
export declare class OwnerController {
    ownerRepository: OwnerRepository;
    constructor(ownerRepository: OwnerRepository);
    create(owner: Omit<Owner, 'id'>): Promise<Owner>;
    count(where?: Where<Owner>): Promise<Count>;
    find(filter?: Filter<Owner>): Promise<Owner[]>;
    updateAll(owner: Owner, where?: Where<Owner>): Promise<Count>;
    findById(id: number, // Obtendo o 'id' do Owner
    filter?: FilterExcludingWhere<Owner>): Promise<Owner>;
    updateById(id: number, // Obtendo o 'id' do Owner
    owner: Owner): Promise<void>;
    replaceById(id: number, // Obtendo o 'id' do Owner
    owner: Owner): Promise<void>;
    deleteById(id: number): Promise<void>;
}
