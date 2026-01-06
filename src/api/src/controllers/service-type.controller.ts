import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {post, param, get, getModelSchemaRef, patch, put, del, requestBody, response} from '@loopback/rest';
import {ServiceType} from '../models';
import {ServiceTypeRepository} from '../repositories';

export class ServiceTypeController {
  constructor(@repository(ServiceTypeRepository) public serviceTypeRepository : ServiceTypeRepository) {}

  @post('/api/service-types')
  @response(200, {description: 'ServiceType model instance', content: {'application/json': {schema: getModelSchemaRef(ServiceType)}}})
  async create(@requestBody({content: {'application/json': {schema: getModelSchemaRef(ServiceType, {title: 'NewServiceType', exclude: ['id']})}}}) serviceType: Omit<ServiceType, 'id'>): Promise<ServiceType> {
    return this.serviceTypeRepository.create(serviceType);
  }

  @get('/api/service-types/count')
  @response(200, {description: 'ServiceType model count', content: {'application/json': {schema: CountSchema}}})
  async count(@param.where(ServiceType) where?: Where<ServiceType>): Promise<Count> {
    return this.serviceTypeRepository.count(where);
  }

  @get('/api/service-types')
  @response(200, {description: 'Array of ServiceType model instances', content: {'application/json': {schema: {type: 'array', items: getModelSchemaRef(ServiceType, {includeRelations: true})}}}})
  async find(@param.filter(ServiceType) filter?: Filter<ServiceType>): Promise<ServiceType[]> {
    return this.serviceTypeRepository.find(filter);
  }

  @get('/api/service-types/{id}')
  @response(200, {description: 'ServiceType model instance', content: {'application/json': {schema: getModelSchemaRef(ServiceType, {includeRelations: true})}}})
  async findById(@param.path.number('id') id: number, @param.filter(ServiceType, {exclude: 'where'}) filter?: FilterExcludingWhere<ServiceType>): Promise<ServiceType> {
    return this.serviceTypeRepository.findById(id, filter);
  }

  @patch('/api/service-types/{id}')
  @response(204, {description: 'ServiceType PATCH success'})
  async updateById(@param.path.number('id') id: number, @requestBody({content: {'application/json': {schema: getModelSchemaRef(ServiceType, {partial: true})}}}) serviceType: ServiceType): Promise<void> {
    await this.serviceTypeRepository.updateById(id, serviceType);
  }

  @del('/api/service-types/{id}')
  @response(204, {description: 'ServiceType DELETE success'})
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.serviceTypeRepository.deleteById(id);
  }
}
