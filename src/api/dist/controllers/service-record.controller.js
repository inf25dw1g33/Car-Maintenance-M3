"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServiceRecordController = class ServiceRecordController {
    constructor(serviceRecordRepository) {
        this.serviceRecordRepository = serviceRecordRepository;
    }
    async create(serviceRecord) {
        return this.serviceRecordRepository.create(serviceRecord);
    }
    async find(filter) {
        return this.serviceRecordRepository.find(filter);
    }
    async findById(id, filter) {
        return this.serviceRecordRepository.findById(id, filter);
    }
    async updateById(id, serviceRecord) {
        await this.serviceRecordRepository.updateById(id, serviceRecord);
    }
    async deleteById(id) {
        await this.serviceRecordRepository.deleteById(id);
    }
};
exports.ServiceRecordController = ServiceRecordController;
tslib_1.__decorate([
    (0, rest_1.post)('/api/service-records'),
    (0, rest_1.response)(200, { description: 'ServiceRecord model instance', content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceRecord) } } }),
    tslib_1.__param(0, (0, rest_1.requestBody)({ content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceRecord, { title: 'NewServiceRecord', exclude: ['id'] }) } } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceRecordController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/service-records'),
    (0, rest_1.response)(200, { description: 'Array of ServiceRecord model instances', content: { 'application/json': { schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.ServiceRecord, { includeRelations: true }) } } } }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ServiceRecord)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceRecordController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/service-records/{id}'),
    (0, rest_1.response)(200, { description: 'ServiceRecord model instance', content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceRecord, { includeRelations: true }) } } }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ServiceRecord, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceRecordController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api/service-records/{id}'),
    (0, rest_1.response)(204, { description: 'ServiceRecord PATCH success' }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({ content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceRecord, { partial: true }) } } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ServiceRecord]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceRecordController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/api/service-records/{id}'),
    (0, rest_1.response)(204, { description: 'ServiceRecord DELETE success' }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceRecordController.prototype, "deleteById", null);
exports.ServiceRecordController = ServiceRecordController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ServiceRecordRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ServiceRecordRepository])
], ServiceRecordController);
//# sourceMappingURL=service-record.controller.js.map