const {Router} = require('express')
const episodeController = require('../controladores/episodes')
const router = Router()

router.get('/', episodeController.getAll)
router.get('/:id', episodeController.getById)  
router.post('/', episodeController.add)
router.put('/:id', episodeController.upDate)
router.delete  ('/:id', episodeController.delete)

module.exports = router; 