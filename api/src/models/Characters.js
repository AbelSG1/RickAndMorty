
const {DataTypes} = require ('sequelize')

module.exports = function (sequelize ){
    return sequelize.define('characters',{
         id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
         },
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         image: {
            type: DataTypes.STRING,
            allowNull: false,
         }
    })
}