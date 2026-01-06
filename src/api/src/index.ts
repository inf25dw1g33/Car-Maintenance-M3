import {ApplicationConfig, CarMaintenanceApplication} from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new CarMaintenanceApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Explorer: ${url}/explorer`);

  return app;
}

if (require.main === module) {
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: '0.0.0.0',
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type,Authorization,X-Requested-With,Accept',
        exposedHeaders: 'Content-Range,X-Total-Count',
        preflightContinue: false,
        optionsSuccessStatus: 204,
      },
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };
  
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}