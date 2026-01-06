"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MechanicController = class MechanicController {
    constructor(mechanicRepository) {
        this.mechanicRepository = mechanicRepository;
    }
    async create(mechanic) {
        return this.mechanicRepository.create(mechanic);
    }
    async find(filter) {
        return this.mechanicRepository.find(filter);
    }
    async findById(id, filter) {
        return this.mechanicRepository.findById(id, filter);
    }
    async updateById(id, mechanic) {
        await this.mechanicRepository.updateById(id, mechanic);
    }
    async deleteById(id) {
        await this.mechanicRepository.deleteById(id);
    }
};
exports.MechanicController = MechanicController;
tslib_1.__decorate([
    (0, rest_1.post)('/api/mechanics'),
    (0, rest_1.response)(200, {
        description: 'Mechanic model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mechanic) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mechanic, { title: 'NewMechanic', exclude: ['id'] }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MechanicController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/mechanics'),
    (0, rest_1.response)(200, {
        description: 'Array of Mechanic model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Mechanic, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Mechanic)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MechanicController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/mechanics/{id}'),
    (0, rest_1.response)(200, {
        description: 'Mechanic model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mechanic, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Mechanic, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MechanicController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api/mechanics/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mechanic PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mechanic, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Mechanic]),
    tslib_1.__metadata("design:returntype", Promise)
], MechanicController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/api/mechanics/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mechanic DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MechanicController.prototype, "deleteById", null);
exports.MechanicController = MechanicController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MechanicRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MechanicRepository])
], MechanicController);
//# sourceMappingURL=mechanic.controller.js.map