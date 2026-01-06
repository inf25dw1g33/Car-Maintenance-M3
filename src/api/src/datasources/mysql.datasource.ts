// src/datasources/mysql.datasource.ts
import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysql',
  connector: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306), // garante number
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'car_maintenance',

  // IMPORTANTE para PT-PT / acentos (MySQL)
  charset: 'utf8mb4',
  collation: 'utf8mb4_unicode_ci'

  // opcional, mas ajuda a evitar problemas de timezone/strings em alguns ambientes
  // timezone: 'Z',
};

@lifeCycleObserver('datasource')
export class MysqlDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
