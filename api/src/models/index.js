// en este archivo inicializamos sequelize y hacemos las relaciones

const {Sequelize} = require('sequelize')
const {dbUser,dbName,dbPort,dbHost, dbPassword} = require('../utils/config')

const CharacterFactory = require('./Characters')
const EpisodesFactory = require('./Episodes')


const sequelize = new Sequelize(
    `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`
)

const Character = CharacterFactory(sequelize)
const Episode = EpisodesFactory(sequelize)

//aca puedo hacer mis relaciones

Character.belongsToMany( Episode, {through: 'CharacterEpisode',as: 'episode' })
Episode.belongsToMany( Character, {through: 'CharacterEpisode',as: 'episode' })

module.exports = { 
    conn : sequelize,
    Character,
    Episode   
}

//models ---> se comunica con la base de datos
//rutas  ---> que son la puerta de entra a nuestra api
//controller ---> lo que hace es ser el interpetre entre nuestras rutas y nuestra base de datos