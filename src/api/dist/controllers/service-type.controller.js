"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServiceTypeController = class ServiceTypeController {
    constructor(serviceTypeRepository) {
        this.serviceTypeRepository = serviceTypeRepository;
    }
    async create(serviceType) {
        return this.serviceTypeRepository.create(serviceType);
    }
    async find(filter) {
        return this.serviceTypeRepository.find(filter);
    }
    async findById(id, filter) {
        return this.serviceTypeRepository.findById(id, filter);
    }
    async updateById(id, serviceType) {
        await this.serviceTypeRepository.updateById(id, serviceType);
    }
    async deleteById(id) {
        await this.serviceTypeRepository.deleteById(id);
    }
};
exports.ServiceTypeController = ServiceTypeController;
tslib_1.__decorate([
    (0, rest_1.post)('/api/service-types'),
    (0, rest_1.response)(200, { description: 'ServiceType model instance', content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceType) } } }),
    tslib_1.__param(0, (0, rest_1.requestBody)({ content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceType, { title: 'NewServiceType', exclude: ['id'] }) } } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceTypeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/service-types'),
    (0, rest_1.response)(200, { description: 'Array of ServiceType model instances', content: { 'application/json': { schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.ServiceType, { includeRelations: true }) } } } }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ServiceType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceTypeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/service-types/{id}'),
    (0, rest_1.response)(200, { description: 'ServiceType model instance', content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceType, { includeRelations: true }) } } }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ServiceType, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceTypeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api/service-types/{id}'),
    (0, rest_1.response)(204, { description: 'ServiceType PATCH success' }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({ content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ServiceType, { partial: true }) } } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ServiceType]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceTypeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/api/service-types/{id}'),
    (0, rest_1.response)(204, { description: 'ServiceType DELETE success' }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceTypeController.prototype, "deleteById", null);
exports.ServiceTypeController = ServiceTypeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ServiceTypeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ServiceTypeRepository])
], ServiceTypeController);
//# sourceMappingURL=service-type.controller.js.map