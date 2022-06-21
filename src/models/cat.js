module.exports = (connection, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    markings: DataTypes.STRING,
    lastFed: DataTypes.DATE
  }

  return connection.define('Cat', schema)
};