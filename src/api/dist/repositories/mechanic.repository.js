"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicRepository = void 0;
const tslib_1 = require("tslib");
// src/repositories/mechanic.repository.ts
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models"); // Certifique-se de que o modelo está importado corretamente
const datasources_1 = require("../datasources"); // Caminho correto para o MysqlDataSource
let MechanicRepository = class MechanicRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Mechanic, dataSource); // Passando o modelo e o datasource
    }
};
exports.MechanicRepository = MechanicRepository;
exports.MechanicRepository = MechanicRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mysql')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MysqlDataSource])
], MechanicRepository);
//# sourceMappingURL=mechanic.repository.js.map