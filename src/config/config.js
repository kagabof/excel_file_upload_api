import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  development: {
    URL: process.env.DEV_DB_URL,
    HOST: process.env.DEV_DB_HOST,
    USER: process.env.DEV_DB_USER,
    PASSWORD: process.env.DEV_DB_PASS,
    DB: process.env.DEV_DB,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 100000,
      idle: 10000,
    },
  },
  production: {
    URL: process.env.PDN_DB_URL,
    HOST: process.env.PDN_DB_HOST,
    USER: process.env.PDN_DB_USER,
    PASSWORD: process.env.PDN_DB_PASS,
    DB: process.env.PDN_DB,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
};

export default dbConfig;
