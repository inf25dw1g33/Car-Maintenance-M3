import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { repository } from '@loopback/repository';  // Importando corretamente o decorador repository do Loopback
import { Owner } from '../models';  // Importando o modelo Owner
import { OwnerRepository } from '../repositories/owner.repository';

export class OwnerController {
  constructor(
    @repository(OwnerRepository) public ownerRepository: OwnerRepository,  // Injeção do repositório
  ) {}

  @post('/api/owners')
  @response(200, {
    description: 'Owner model instance',
    content: {'application/json': {schema: getModelSchemaRef(Owner)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {
            title: 'NewOwner',
            exclude: ['id'],  // Excluindo o campo 'id' ao criar um novo Owner
          }),
        },
      },
    })
    owner: Omit<Owner, 'id'>,  // Omitindo o campo 'id' ao criar um novo Owner
  ): Promise<Owner> {
    return this.ownerRepository.create(owner);  // Criando um novo Owner no banco de dados
  }

  @get('/api/owners/count')
  @response(200, {
    description: 'Owner model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Owner) where?: Where<Owner>,  // Usando a cláusula WHERE para contar Owners
  ): Promise<Count> {
    return this.ownerRepository.count(where);  // Retorna o número de Owners que atendem à condição WHERE
  }

  @get('/api/owners')
  @response(200, {
    description: 'Array of Owner model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Owner, {includeRelations: true}),  // Incluindo relações ao buscar Owners
        },
      },
    },
  })
  async find(
    @param.filter(Owner) filter?: Filter<Owner>,  // Usando filtros para retornar Owners
  ): Promise<Owner[]> {
    return this.ownerRepository.find(filter);  // Retorna uma lista de Owners com base no filtro
  }

  @patch('/api/owners')
  @response(200, {
    description: 'Owner PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {partial: true}),  // Permitindo atualização parcial dos Owners
        },
      },
    })
    owner: Owner,
    @param.where(Owner) where?: Where<Owner>,  // Usando a cláusula WHERE para atualizar Owners
  ): Promise<Count> {
    return this.ownerRepository.updateAll(owner, where);  // Atualiza todos os Owners que atendem à condição WHERE
  }

  @get('/api/owners/{id}')
  @response(200, {
    description: 'Owner model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Owner, {includeRelations: true}),  // Incluindo relações ao buscar um Owner
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,  // Obtendo o 'id' do Owner
    @param.filter(Owner, {exclude: 'where'}) filter?: FilterExcludingWhere<Owner>,
  ): Promise<Owner> {
    return this.ownerRepository.findById(id, filter);  // Retorna um Owner pelo seu 'id'
  }

  @patch('/api/owners/{id}')
  @response(204, {
    description: 'Owner PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,  // Obtendo o 'id' do Owner
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {partial: true}),  // Permitindo atualização parcial do Owner
        },
      },
    })
    owner: Owner,
  ): Promise<void> {
    await this.ownerRepository.updateById(id, owner);  // Atualiza um Owner pelo seu 'id'
  }

  @put('/api/owners/{id}')
  @response(200, {
    description: 'Owner PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,  // Obtendo o 'id' do Owner
    @requestBody() owner: Owner,  // O novo objeto Owner para substituir
  ): Promise<void> {
    await this.ownerRepository.replaceById(id, owner);  // Substitui um Owner pelo seu 'id'
  }

  @del('/api/owners/{id}')
  @response(204, {
    description: 'Owner DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ownerRepository.deleteById(id);  // Deleta um Owner pelo seu 'id'
  }
}
