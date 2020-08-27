var express = require('express');
var router = express.Router();
const petsCtrl = require('../controllers/api/pets')

router.get('/pets', petsCtrl.index)
router.get('/pets/:id', petsCtrl.show)
router.post('/pets', petsCtrl.create)
router.put('/pets/:id', petsCtrl.update)
router.delete('/pets/:id', petsCtrl.deleteOne)

module.exports = router;
