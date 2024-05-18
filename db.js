require('dotenv').config();
const { Client } = require('pg');

const isTestEnv = process.env.NODE_ENV === 'test';
const connectionString = isTestEnv ? process.env.TEST_DB_URL : process.env.DEV_DB_URL;

const client = new Client({
  connectionString: connectionString
});

client.connect()
  .then(() => {
    console.log(`Connected to ${isTestEnv ? 'test' : 'development'} database`);
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });

module.exports = client;
