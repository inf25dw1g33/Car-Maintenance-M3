import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {post, param, get, getModelSchemaRef, patch, put, del, requestBody, response} from '@loopback/rest';
import {Mechanic} from '../models';
import {MechanicRepository} from '../repositories';

export class MechanicController {
  constructor(
    @repository(MechanicRepository)
    public mechanicRepository: MechanicRepository,
  ) {}

  @post('/api/mechanics')
  @response(200, {
    description: 'Mechanic model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mechanic)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mechanic, {
            title: 'NewMechanic',
            exclude: ['id'],
          }),
        },
      },
    })
    mechanic: Omit<Mechanic, 'id'>,
  ): Promise<Mechanic> {
    return this.mechanicRepository.create(mechanic);
  }

  @get('/api/mechanics/count')
  @response(200, {
    description: 'Mechanic model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Mechanic) where?: Where<Mechanic>): Promise<Count> {
    return this.mechanicRepository.count(where);
  }

  @get('/api/mechanics')
  @response(200, {
    description: 'Array of Mechanic model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mechanic, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Mechanic) filter?: Filter<Mechanic>): Promise<Mechanic[]> {
    return this.mechanicRepository.find(filter);
  }

  @get('/api/mechanics/{id}')
  @response(200, {
    description: 'Mechanic model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mechanic, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mechanic, {exclude: 'where'}) filter?: FilterExcludingWhere<Mechanic>,
  ): Promise<Mechanic> {
    return this.mechanicRepository.findById(id, filter);
  }

  @patch('/api/mechanics/{id}')
  @response(204, {
    description: 'Mechanic PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mechanic, {partial: true}),
        },
      },
    })
    mechanic: Mechanic,
  ): Promise<void> {
    await this.mechanicRepository.updateById(id, mechanic);
  }

  @put('/api/mechanics/{id}')
  @response(204, {
    description: 'Mechanic PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mechanic: Mechanic,
  ): Promise<void> {
    await this.mechanicRepository.replaceById(id, mechanic);
  }

  @del('/api/mechanics/{id}')
  @response(204, {
    description: 'Mechanic DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mechanicRepository.deleteById(id);
  }
}
