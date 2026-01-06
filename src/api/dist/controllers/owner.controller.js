"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const repository_2 = require("@loopback/repository"); // Importando corretamente o decorador repository do Loopback
const models_1 = require("../models"); // Importando o modelo Owner
const owner_repository_1 = require("../repositories/owner.repository");
let OwnerController = class OwnerController {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async create(owner) {
        return this.ownerRepository.create(owner); // Criando um novo Owner no banco de dados
    }
    async count(where) {
        return this.ownerRepository.count(where); // Retorna o número de Owners que atendem à condição WHERE
    }
    async find(filter) {
        return this.ownerRepository.find(filter); // Retorna uma lista de Owners com base no filtro
    }
    async updateAll(owner, where) {
        return this.ownerRepository.updateAll(owner, where); // Atualiza todos os Owners que atendem à condição WHERE
    }
    async findById(id, filter) {
        return this.ownerRepository.findById(id, filter); // Retorna um Owner pelo seu 'id'
    }
    async updateById(id, owner) {
        await this.ownerRepository.updateById(id, owner); // Atualiza um Owner pelo seu 'id'
    }
    async replaceById(id, owner) {
        await this.ownerRepository.replaceById(id, owner); // Substitui um Owner pelo seu 'id'
    }
    async deleteById(id) {
        await this.ownerRepository.deleteById(id); // Deleta um Owner pelo seu 'id'
    }
};
exports.OwnerController = OwnerController;
tslib_1.__decorate([
    (0, rest_1.post)('/api/owners'),
    (0, rest_1.response)(200, {
        description: 'Owner model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Owner) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, {
                    title: 'NewOwner',
                    exclude: ['id'], // Excluindo o campo 'id' ao criar um novo Owner
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/owners/count'),
    (0, rest_1.response)(200, {
        description: 'Owner model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Owner)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/owners'),
    (0, rest_1.response)(200, {
        description: 'Array of Owner model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Owner, { includeRelations: true }), // Incluindo relações ao buscar Owners
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Owner)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api/owners'),
    (0, rest_1.response)(200, {
        description: 'Owner PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, { partial: true }), // Permitindo atualização parcial dos Owners
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Owner)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Owner, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api/owners/{id}'),
    (0, rest_1.response)(200, {
        description: 'Owner model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, { includeRelations: true }), // Incluindo relações ao buscar um Owner
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Owner, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api/owners/{id}'),
    (0, rest_1.response)(204, {
        description: 'Owner PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Owner, { partial: true }), // Permitindo atualização parcial do Owner
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Owner]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/api/owners/{id}'),
    (0, rest_1.response)(200, {
        description: 'Owner PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Owner]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/api/owners/{id}'),
    (0, rest_1.response)(204, {
        description: 'Owner DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerController.prototype, "deleteById", null);
exports.OwnerController = OwnerController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_2.repository)(owner_repository_1.OwnerRepository)),
    tslib_1.__metadata("design:paramtypes", [owner_repository_1.OwnerRepository])
], OwnerController);
//# sourceMappingURL=owner.controller.js.map