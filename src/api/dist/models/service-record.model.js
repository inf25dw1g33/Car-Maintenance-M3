"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecord = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const vehicle_model_1 = require("./vehicle.model");
const service_type_model_1 = require("./service-type.model");
let ServiceRecord = class ServiceRecord extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.ServiceRecord = ServiceRecord;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], ServiceRecord.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => vehicle_model_1.Vehicle, { name: 'vehicle' }),
    tslib_1.__metadata("design:type", Number)
], ServiceRecord.prototype, "vehicleId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => service_type_model_1.ServiceType, { name: 'serviceType' }),
    tslib_1.__metadata("design:type", Number)
], ServiceRecord.prototype, "serviceTypeId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        mysql: {
            columnName: 'service_date',
            dataType: 'date',
        },
    }),
    tslib_1.__metadata("design:type", String)
], ServiceRecord.prototype, "serviceDate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        mysql: {
            columnName: 'mileage_km',
            dataType: 'int',
        },
    }),
    tslib_1.__metadata("design:type", Number)
], ServiceRecord.prototype, "mileageKm", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        mysql: {
            columnName: 'cost',
            dataType: 'decimal',
            precision: 10,
            scale: 2,
        },
    }),
    tslib_1.__metadata("design:type", Number)
], ServiceRecord.prototype, "cost", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        mysql: {
            columnName: 'notes',
            dataType: 'text',
        },
    }),
    tslib_1.__metadata("design:type", String)
], ServiceRecord.prototype, "notes", void 0);
exports.ServiceRecord = ServiceRecord = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            mysql: { table: 'service_records' },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ServiceRecord);
//# sourceMappingURL=service-record.model.js.map