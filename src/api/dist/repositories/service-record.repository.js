"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources"); // Caminho correto para importar o MysqlDataSource
const models_1 = require("../models");
let ServiceRecordRepository = class ServiceRecordRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, vehicleRepositoryGetter, serviceTypeRepositoryGetter) {
        super(models_1.ServiceRecord, dataSource);
        this.vehicleRepositoryGetter = vehicleRepositoryGetter;
        this.serviceTypeRepositoryGetter = serviceTypeRepositoryGetter;
        // Criação da relação BelongsTo com o repositório de Vehicle
        this.vehicle = this.createBelongsToAccessorFor('vehicle', vehicleRepositoryGetter);
        this.registerInclusionResolver('vehicle', this.vehicle.inclusionResolver);
        // Criação da relação BelongsTo com o repositório de ServiceType
        this.serviceType = this.createBelongsToAccessorFor('serviceType', serviceTypeRepositoryGetter);
        this.registerInclusionResolver('serviceType', this.serviceType.inclusionResolver);
    }
};
exports.ServiceRecordRepository = ServiceRecordRepository;
exports.ServiceRecordRepository = ServiceRecordRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mysql')),
    tslib_1.__param(1, repository_1.repository.getter('VehicleRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ServiceTypeRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MysqlDataSource, Function, Function])
], ServiceRecordRepository);
//# sourceMappingURL=service-record.repository.js.map