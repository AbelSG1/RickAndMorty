// aca vamos a interactuar con nuestro entorno

require('dotenv').config();

module.exports = {
    dbUser : process.env.DB_USER || 'abel',
    dbName : process.env.DB_NAME || 'rickmorty' ,
    dbPort : process.env.DB_PORT || '5432',
    dbHost : process.env.DB_HOST || 'localhost',
    dbPassword : process.env.DB_PASSWORD || '123456789', 
    host : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3001
 

    
}