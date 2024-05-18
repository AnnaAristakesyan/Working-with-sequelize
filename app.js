import Database from './src/database';
import dbConfig from './src/config/database'


const environment = process.env.NODE_ENV || 'development';
const database = new Database(environment, dbConfig);

async function startApp() {
  try {
    await database.connect();
    console.log('Database connected');

    // Your application code here

  } catch (error) {
    console.error('Failed to connect to the database:', error);
  } finally {
    await database.disconnect();
  }
}

startApp();
