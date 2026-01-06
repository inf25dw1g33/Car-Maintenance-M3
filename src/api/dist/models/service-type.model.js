"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const service_record_model_1 = require("./service-record.model");
let ServiceType = class ServiceType extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.ServiceType = ServiceType;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ServiceType.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        mysql: {
            columnName: 'name',
            dataType: 'varchar',
            dataLength: 100,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ServiceType.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        mysql: {
            columnName: 'description',
            dataType: 'varchar',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ServiceType.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => service_record_model_1.ServiceRecord, { keyTo: 'serviceTypeId' }),
    tslib_1.__metadata("design:type", Array)
], ServiceType.prototype, "serviceRecords", void 0);
exports.ServiceType = ServiceType = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            mysql: { table: 'service_types' },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ServiceType);
//# sourceMappingURL=service-type.model.js.map