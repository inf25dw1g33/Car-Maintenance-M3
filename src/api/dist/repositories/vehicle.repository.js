"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRepository = void 0;
const tslib_1 = require("tslib");
// src/repositories/vehicle.repository.ts
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const mysql_datasource_1 = require("../datasources/mysql.datasource"); // Conector para o banco de dados
let VehicleRepository = class VehicleRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Vehicle, dataSource);
    }
};
exports.VehicleRepository = VehicleRepository;
exports.VehicleRepository = VehicleRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mysql')),
    tslib_1.__metadata("design:paramtypes", [mysql_datasource_1.MysqlDataSource])
], VehicleRepository);
//# sourceMappingURL=vehicle.repository.js.map