/*
vamos a traer los archivos
mi route de characters y mi route de espisodes
 */

const {Router} = require('express')

 const CharactersRoutes = require('./characters')
const EpisodesRoutes = require('./episodes')
    
const router = Router()



router.use('/characters', CharactersRoutes)
router.use('/episodes', EpisodesRoutes)

module.exports = router; 