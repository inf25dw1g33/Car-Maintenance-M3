"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const mysql_datasource_1 = require("../datasources/mysql.datasource"); // Corrigido o caminho de importação
const models_1 = require("../models");
let ServiceTypeRepository = class ServiceTypeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, serviceRecordRepositoryGetter) {
        super(models_1.ServiceType, dataSource);
        this.serviceRecordRepositoryGetter = serviceRecordRepositoryGetter;
        // Criação da relação HasMany com o repositório de ServiceRecord
        this.serviceRecords = this.createHasManyRepositoryFactoryFor('serviceRecords', serviceRecordRepositoryGetter);
        this.registerInclusionResolver('serviceRecords', this.serviceRecords.inclusionResolver);
    }
};
exports.ServiceTypeRepository = ServiceTypeRepository;
exports.ServiceTypeRepository = ServiceTypeRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mysql')),
    tslib_1.__param(1, repository_1.repository.getter('ServiceRecordRepository')),
    tslib_1.__metadata("design:paramtypes", [mysql_datasource_1.MysqlDataSource, Function])
], ServiceTypeRepository);
//# sourceMappingURL=service-type.repository.js.map