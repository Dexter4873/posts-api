export default () => ({
  database: {
    user: process.env['DB_USER'],
    password: process.env['DB_PASSWORD'],
    host: process.env['DB_HOST'],
    name: process.env['DB_NAME'],
    port: process.env['DB_PORT'],
  },
  port: process.env['PORT'],
});
