import Sequelize from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { sequelize } from '../config/dbConnect';

const FileInfo = sequelize.define(
  'file_info',
  {
    id: {
      type: Sequelize.CHAR(255),
      allowNull: false,
      primaryKey: true,
      defaultValue: uuidv4(),
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
      type: Sequelize.DATEONLY,
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
