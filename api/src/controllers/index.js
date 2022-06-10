const { getAllDogs } = require('./reqController');
const { addNewDog, getAllTemps } = require('./dbController');
const { Temperament } = require('../db')

const getDogs = async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    res.json(allDogs);
  } catch (error) {
    res.status(400).json({msg: error});
  }
};

const getDogsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await getAllDogs();
    if(name) {
      let dogNames = allDogs.filter(
        dog => dog.name.toLowerCase().includes(name.toLowerCase())
      );
      dogNames.length ? res.json(dogNames) :
                        res.status(404).send(`Can't find a dog with that name`)
    }
  } catch (error) {
    res.json(error);
  }
};

const getDetailById = async (req, res) => {
  try {
    const { idRaza } = req.params;
    console.log(idRaza);
    const allDogs = await getAllDogs();
    if(idRaza === null) {
      res.status(404).json('Name not found in database')
    } else {
      let dog = allDogs.find(dog => dog.id === parseInt(idRaza));
      res.json(dog);
    }
  } catch (error) {
    res.status(404).json(error);
  }
}

const newDogs = async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperament} = req.body;
    if(!name || !image || !height || !weight || !life_span) {
      throw new Error ('Something went wrong')
    }
    const newDogAdded = await addNewDog(req.body);
    if (typeof(newDogAdded) === 'string') {
      throw new Error(newDogAdded)
    
    }
    temperament.map(async tem => {
      const findTemp = await Temperament.findAll({
        where: { name: tem }
      });
      newDogAdded.addTemperament(findTemp);
    });
    console.log(newDogAdded);
    res.json(newDogAdded);
  } catch (error) {
    res.status(404).json({ msg: error.message});
  }
};

const Temperaments = async (req, res) => {
  try {
    const a = await getAllTemps();
    res.json(a);
  } catch (error) {
    res.status(400).json({msg: 'nop'});
  }
}

module.exports = {
  getDogs,
  newDogs,
  getDetailById,
  getDogsByName,
  Temperaments,
  getAllTemps
}