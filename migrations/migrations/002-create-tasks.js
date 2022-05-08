'use strict';

const DB_SCHEMA = process.env.DB_SCHEMA;
const { withMigration } = require('../utils');

const TABLE_NAME = 'Tasks';
const target = { tableName: TABLE_NAME, schema: DB_SCHEMA };

module.exports = {
  up: withMigration((queryInterface, DataTypes, transaction) => {
    return queryInterface.createTable(
      target,
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        edited: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          defaultValue: 'created',
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      { transaction },
    );
  }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(target);
  },
};
