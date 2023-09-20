//DEFINO TIPOS DE DATOS DE LOS ATRIBUTOS DEL MODELO - EXPORTO UNA FUNCION QUE RETORNA UN MODELO DEFINIDO DE SEQUELIZE
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {   //LA FUNCION RECIBE LA INSTANCIA
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true//,
         //autoIncrement: true
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false
      },
      status:{
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false
      },
      species:{
         type: DataTypes.STRING,
         allowNull: false
      },
      gender:{
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: false
      },
      image:{
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};


