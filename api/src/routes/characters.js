const {Router} = require('express')
const charactercontroller = require('../controladores/characters')
const router = Router()

router.get('/', charactercontroller.getAll)
router.get('/:id', charactercontroller.getById)  
router.post('/', charactercontroller.add)
router.post(
    '/:characterId/epidose/:episodeId',
    charactercontroller.addEpisodeToCaracter
    )
router.put('/:id', charactercontroller.upDate)
router.delete  ('/:id', charactercontroller.delete)

module.exports = router;  