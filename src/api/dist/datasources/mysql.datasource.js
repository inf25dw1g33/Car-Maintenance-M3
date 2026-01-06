"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDataSource = void 0;
const tslib_1 = require("tslib");
// src/datasources/mysql.datasource.ts
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mysql',
    connector: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'car_maintenance',
};
let MysqlDataSource = class MysqlDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.MysqlDataSource = MysqlDataSource;
MysqlDataSource.dataSourceName = 'mysql';
MysqlDataSource.defaultConfig = config;
exports.MysqlDataSource = MysqlDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.mysql', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MysqlDataSource);
//# sourceMappingURL=mysql.datasource.js.map