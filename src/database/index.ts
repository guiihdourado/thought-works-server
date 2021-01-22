import { createConnection } from 'typeorm';
import Account from '../schemas/Account';

createConnection({
  "type": "mongodb",
  "useNewUrlParser": true,
  "url": "mongodb+srv://admin:admin@cluster0.q9lux.mongodb.net/thoughtworks?retryWrites=true&w=majority",
  "ssl": true,
  "useUnifiedTopology": true,
  "entities": [Account]
});