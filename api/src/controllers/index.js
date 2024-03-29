const { getAllDogs } = require('./reqController');
const { addNewDog, getAllTemps } = require('./dbController');
const { Temperament, Dog } = require('../db');


const getDogs = async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    res.json(allDogs);
  } catch (error) {
    res.status(400).json({msg: error});
  }
};

const getDogsByName = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = await getAllDogs();
    if(name) {
      let dogNames = allDogs.filter(
        dog => dog.name.toLowerCase().includes(name.toLowerCase())
      );
      dogNames.length ? res.status(200).json(dogNames) :
                        res.status(404).send(`Can't find a dog with that name`)
    } else { res.json(allDogs) }
  } catch (error) {
    res.json(error);
  }
};

const getDetailById = async (req, res) => {
  try {
    const { idBreed } = req.params;
    const allDogs = await getAllDogs();
    if(!idBreed) {
      res.status(404).json('Dog not found in database')
    } else {
      let dog = allDogs.find(dog => dog.id == idBreed);
      res.json(dog);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const newDogs = async (req, res) => {
  try {
    const { name, image, max_height, min_height, min_weight, max_weight, life_span, temperament} = req.body;
    if(!name || !image || !min_height || !min_weight || !max_height || !max_weight || !life_span) {
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
};

const comesFrom = async (req, res) => {
  const { from } = req.query;
  try {
    const allDogs = await getAllDogs();
    if(from) {
      let partOf = allDogs.filter(
        dog => dog.from === from 
      );
      partOf.length ? res.status(200).json(partOf) :
                        res.status(404).send(`Can't find a dog with that name`)
    } else { res.json(allDogs) }
  } catch (error) {
    res.json(error);
  }
};

const deleteBreed = async (req, res) => {
  const { idBreed } = req.params;
  try {
    Dog.destroy( { where: { id: idBreed} })
    .then( e => {
      if (e === 1) {
        return res.status(200).json('Dog Breed deleted successfully')
      }
    })
  } catch (error) {
    console.log(error);
  }
};

const updateInfo = async (req, res) => {
  const { idBreed } = req.params;
  const { name, min_weight, temperament, Newtemperament } = req.body;
  try {
    const nose = await Dog.update({
      name: name,
      min_weight: min_weight,
    }, {
      where: {
        id: idBreed
      }
    });
    const uua = await Dog.findOne({
      where: { id: idBreed }
    })
    for (const e of temperament) {
      const are = await Temperament.findOne({
        where: { name: e }
      })
      uua.removeTemperament(are)
    }

    for (const i of Newtemperament) {
      const were = await Temperament.findOne({
        where: { name: i }
      })
      uua.addTemperament(were)
    }
    
    return res.json(nose)
  } catch (error) {
    // "Newtemperament" : ["Playful", "Fun-loving"]
  }
};


module.exports = {
  getDogs,
  newDogs,
  getDetailById,
  getDogsByName,
  Temperaments,
  getAllTemps,
  comesFrom,
  deleteBreed,
  updateInfo
}