/* eslint-disable import/prefer-default-export */
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import dbConfig from './config';

dotenv.config();

const env = process.env.ENV;
const dbEnv = dbConfig[env];

const sequelizeSetup = () => {
  let sequelize;
  if (dbEnv.URL) {
    sequelize = new Sequelize(dbEnv.URL, dbEnv);
  } else {
    sequelize = new Sequelize(dbEnv.DB, dbEnv.USER, dbEnv.PASSWORD, {
      host: dbEnv.HOST,
      dialect: dbEnv.dialect,
      operatorsAliases: false,

      pool: {
        max: dbEnv.pool.max,
        min: dbEnv.pool.min,
        acquire: dbEnv.pool.acquire,
        idle: dbEnv.pool.idle,
      },
    });
  }
  return sequelize;
};

export const sequelize = sequelizeSetup();

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully on', env);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
