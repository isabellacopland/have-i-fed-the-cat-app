const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastFed: DataTypes.DataTypes
    }

    return sequelize.define('Cat', schema)
};