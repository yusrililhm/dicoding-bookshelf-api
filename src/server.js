const Hapi = require('@hapi/hapi');

const init = async() => {
  const server = Hapi.Server({
    port: 9000,
    host: 'localhost',
  });
  await server.start();
  console.log(`Server Is Running ON ${server.info.uri}`);
};

init();
