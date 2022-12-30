module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', 'containers-us-west-58.railway.app'),
        port: env.int('PGPORT', 6553),
        database: env('PGDATABASE', 'railway'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', 'railway'),
        ssl: env.bool(true),
      },
    },
  });