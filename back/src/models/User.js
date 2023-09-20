//DEFINO TIPOS DE DATOS DE LOS ATRIBUTOS DEL MODELO - EXPORTO UNA FUNCION QUE RETORNA UN MODELO DEFINIDO DE SEQUELIZE
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {   //LA FUNCION RECIBE LA INSTANCIA
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false });
};
