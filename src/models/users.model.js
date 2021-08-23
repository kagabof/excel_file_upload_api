import Sequelize from 'sequelize';
import crypto from 'crypto';
import { sequelize } from '../config/dbConnect';

const Users = sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.CHAR(255),
      allowNull: false,
      primaryKey: true,
      defaultValue: crypto.randomBytes(16).toString('hex'),
    },
    names: {
      type: Sequelize.CHAR(255),
      allowNull: false,
    },
    username: {
      type: Sequelize.CHAR(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.CHAR(255),
      allowNull: false,
      unique: 'email',
    },
    password: {
      type: Sequelize.CHAR(255),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
      {
        name: 'email',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'email' }],
      },
    ],
  },
);

export default Users;
