import Sequelize from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { sequelize } from '../config/dbConnect';

const PopulationInfo = sequelize.define(
  'population_info',
  {
    id: {
      type: Sequelize.CHAR(255),
      allowNull: false,
      primaryKey: true,
      defaultValue: uuidv4(),
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
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    updated_date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      defaultValue: new Date(),
    },
    isCommited: {
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
