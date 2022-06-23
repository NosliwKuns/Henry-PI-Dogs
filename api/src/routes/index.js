const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    comesFrom, 
    getDogs, 
    newDogs, 
    getDetailById, 
    getDogsByName, 
    Temperaments, 
    deleteBreed,
    updateInfo
  } = require('../controllers/index')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs);

router.get('/dog', getDogsByName);

router.get('/dogs/:idBreed', getDetailById);

router.post('/dogs', newDogs);

router.get('/temps', Temperaments);

router.get('/created', comesFrom);

router.delete('/delete/:idBreed', deleteBreed)

router.put('/update/:idBreed', updateInfo)



module.exports = router;
