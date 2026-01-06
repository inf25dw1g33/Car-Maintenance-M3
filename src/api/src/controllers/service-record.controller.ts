import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {post, param, get, getModelSchemaRef, patch, put, del, requestBody, response} from '@loopback/rest';
import {ServiceRecord} from '../models';
import {ServiceRecordRepository} from '../repositories';

export class ServiceRecordController {
  constructor(@repository(ServiceRecordRepository) public serviceRecordRepository : ServiceRecordRepository) {}

  @post('/api/service-records')
  @response(200, {description: 'ServiceRecord model instance', content: {'application/json': {schema: getModelSchemaRef(ServiceRecord)}}})
  async create(@requestBody({content: {'application/json': {schema: getModelSchemaRef(ServiceRecord, {title: 'NewServiceRecord', exclude: ['id']})}}}) serviceRecord: Omit<ServiceRecord, 'id'>): Promise<ServiceRecord> {
    return this.serviceRecordRepository.create(serviceRecord);
  }

  @get('/api/service-records/count')
  @response(200, {description: 'ServiceRecord model count', content: {'application/json': {schema: CountSchema}}})
  async count(@param.where(ServiceRecord) where?: Where<ServiceRecord>): Promise<Count> {
    return this.serviceRecordRepository.count(where);
  }

  @get('/api/service-records')
  @response(200, {description: 'Array of ServiceRecord model instances', content: {'application/json': {schema: {type: 'array', items: getModelSchemaRef(ServiceRecord, {includeRelations: true})}}}})
  async find(@param.filter(ServiceRecord) filter?: Filter<ServiceRecord>): Promise<ServiceRecord[]> {
    return this.serviceRecordRepository.find(filter);
  }

  @get('/api/service-records/{id}')
  @response(200, {description: 'ServiceRecord model instance', content: {'application/json': {schema: getModelSchemaRef(ServiceRecord, {includeRelations: true})}}})
  async findById(@param.path.number('id') id: number, @param.filter(ServiceRecord, {exclude: 'where'}) filter?: FilterExcludingWhere<ServiceRecord>): Promise<ServiceRecord> {
    return this.serviceRecordRepository.findById(id, filter);
  }

  @patch('/api/service-records/{id}')
  @response(204, {description: 'ServiceRecord PATCH success'})
  async updateById(@param.path.number('id') id: number, @requestBody({content: {'application/json': {schema: getModelSchemaRef(ServiceRecord, {partial: true})}}}) serviceRecord: ServiceRecord): Promise<void> {
    await this.serviceRecordRepository.updateById(id, serviceRecord);
  }

  @del('/api/service-records/{id}')
  @response(204, {description: 'ServiceRecord DELETE success'})
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.serviceRecordRepository.deleteById(id);
  }
}
