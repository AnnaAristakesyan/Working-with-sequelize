import './config';
import Database from './database';
import envirement from './config/envirement';
import dbConfig from './config/database';
import express from 'express';

const app = express();

(async () => {
  try {
    const db = new Database(envirement.nodeEnv, dbConfig);
    await db.connect();
    console.log('Database connected successfully');

    // Middleware setup, route definitions, etc.
    app.use(express.json());

    // Define your routes here
    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.log("ERROR", err.stack);
  }
})();
