export const sqlConfig = {
    server: '192.168.1.5',
    port: 1433,
    user: 'sa',
    password: '123456789',
    database: 'senai',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 10000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}