import Sequelize from 'sequelize';
import crypto from 'crypto';
import { sequelize } from '../config/dbConnect';

const PopulationInfo = sequelize.define(
  'population_info',
  {
    id: {
      type: Sequelize.CHAR(255),
      allowNull: false,
      primaryKey: true,
      defaultValue: crypto.randomBytes(16).toString('hex'),
    },
    file_id: {
      type: Sequelize.CHAR(255),
      allowNull: false,
    },
    names: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    NID: {
      type: Sequelize.CHAR(255),
      allowNull: true,
    },
    gender: {
      type: Sequelize.CHAR(255),
      allowNull: true,
    },
    phone_number: {
      type: Sequelize.CHAR(255),
      allowNull: true,
    },
    email: {
      type: Sequelize.CHAR(255),
      allowNull: true,
    },
    errors: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    entry_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    updated_date: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: new Date(),
    },
    isCommitted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'population_info',
    timestamps: false,
  },
);

export default PopulationInfo;
