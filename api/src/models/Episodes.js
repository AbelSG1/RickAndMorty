
const {DataTypes} = require ('sequelize')

module.exports = function (sequelize ){
    return sequelize.define('episode',{
         id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
         },
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         }

    })
}

// Sequilize es una libreria que es super opinionada
// todo lo que no le digas a sequelize que haga el lo va a suponer