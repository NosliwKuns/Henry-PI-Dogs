const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDogs, newDogs, getDetailById, getDogsByName, Temperaments } = require('../controllers/index')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs);

router.get('/dog', getDogsByName);

router.get('/dogs/:idRaza', getDetailById);

router.post('/dogs', newDogs);

router.get('/temp', Temperaments);

module.exports = router;
