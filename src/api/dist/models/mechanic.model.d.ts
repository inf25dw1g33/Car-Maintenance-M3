import { Entity } from '@loopback/repository';
export declare class Mechanic extends Entity {
    id: number;
    name: string;
    specialization: string;
    constructor(data?: Partial<Mechanic>);
}
