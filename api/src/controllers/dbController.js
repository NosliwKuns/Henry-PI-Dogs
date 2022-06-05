const { Dog, Temperament } = require('../db');

const getAllDogsDb = async () => {
  try {
    const dogs = await Dog.findAll()
    return dogs;
  } catch (error) {
      console.log(error)
  }
};

const addNewDog = async (body) => {
  try {
    const addDog = await Dog.create(body);
    return addDog;
  } catch (error) {
    return 'Name already exists'
  }
};

const  getAllTemps = async () => {
  try {
    const temperaments = await Temperament.findAll();
    return temperaments;
  } catch (error) {
    
  }
};

const addTemperaments = async (api) => {
  try {
    const temperament = await Temperament.create(api);
    return temperament;
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getAllDogsDb,
  addNewDog,
  addTemperaments,
  getAllTemps
}