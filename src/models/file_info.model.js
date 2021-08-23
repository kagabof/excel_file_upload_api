import Sequelize from 'sequelize';
import crypto from 'crypto';
import { sequelize } from '../config/dbConnect';

const FileInfo = sequelize.define(
  'file_info',
  {
    id: {
      type: Sequelize.CHAR(255),
      allowNull: false,
      primaryKey: true,
      defaultValue: crypto.randomBytes(16).toString('hex'),
    },
    name: {
      type: Sequelize.CHAR(255),
      allowNull: false,
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    number_of_rows: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    uploaded_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'file_info',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }],
      },
    ],
  },
);

export default FileInfo;
