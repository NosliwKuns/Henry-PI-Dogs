const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_height: {
      type: DataTypes.INTEGER,
    },
    max_height: {
      type: DataTypes.INTEGER,
    },
    min_weight: {
      type: DataTypes.INTEGER,
    },
    max_weight: {
      type: DataTypes.INTEGER,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
      defaultValue: 'dataBase'
    }
  });
};
