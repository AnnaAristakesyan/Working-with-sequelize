  const envirement = {
    nodeEnv: process.env.NODE_ENV || 'development',
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || '2107',
    dbName: process.env.DB_NAME || 'sequelise_working',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || 5432,
  };
  
  export default envirement;