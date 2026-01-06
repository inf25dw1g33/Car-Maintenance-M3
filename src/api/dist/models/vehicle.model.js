"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const owner_model_1 = require("./owner.model");
const service_record_model_1 = require("./service-record.model");
let Vehicle = class Vehicle extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Vehicle = Vehicle;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Vehicle.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => owner_model_1.Owner, { name: 'owner' }),
    tslib_1.__metadata("design:type", Number)
], Vehicle.prototype, "ownerId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        mysql: {
            columnName: 'brand',
            dataType: 'varchar',
            dataLength: 50,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        mysql: {
            columnName: 'model',
            dataType: 'varchar',
            dataLength: 50,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        mysql: {
            columnName: 'license_plate',
            dataType: 'varchar',
            dataLength: 20,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "licensePlate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        mysql: {
            columnName: 'year',
            dataType: 'int',
        },
    }),
    tslib_1.__metadata("design:type", Number)
], Vehicle.prototype, "year", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => service_record_model_1.ServiceRecord, { keyTo: 'vehicleId' }),
    tslib_1.__metadata("design:type", Array)
], Vehicle.prototype, "serviceRecords", void 0);
exports.Vehicle = Vehicle = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            mysql: { table: 'vehicles' },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Vehicle);
//# sourceMappingURL=vehicle.model.js.map