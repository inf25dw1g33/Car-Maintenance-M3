"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const vehicle_model_1 = require("./vehicle.model");
let Owner = class Owner extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Owner = Owner;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Owner.prototype, "id", void 0);
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
], Owner.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        mysql: {
            columnName: 'email',
            dataType: 'varchar',
            dataLength: 100,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Owner.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        mysql: {
            columnName: 'phone',
            dataType: 'varchar',
            dataLength: 30,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Owner.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => vehicle_model_1.Vehicle, { keyTo: 'ownerId' }),
    tslib_1.__metadata("design:type", Array)
], Owner.prototype, "vehicles", void 0);
exports.Owner = Owner = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            mysql: { table: 'owners' },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Owner);
//# sourceMappingURL=owner.model.js.map