const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {t, c, b, getDogs, newDogs, getDetailById, getDogsByName, Temperaments, filtTemp } = require('../controllers/index')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs);

router.get('/dog', getDogsByName);

router.get('/dogs/:idBreed', getDetailById);

/* router.post('/dogs', newDogs); */

router.post('/dogs', b);



/* router.get('/temps', Temperaments); */

router.get('/temps', c);

router.get('/temp/', t);


module.exports = router;
