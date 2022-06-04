const { Dog } = require('../db');

const getAllDogsDb = async () => {
  try {
    const dogsInfo = await Dog.findAll()
 /*      {
        attributes: ['id', 'name', 'image', 'lifeSpan'],
        include: {
          model: Dog,
          attributes: ['raza'],
          through: {
            attributes: []
          }
        }
      }
    ); */

    const dogs = dogsInfo.map(info => (
      {
       id: info.id,
       name: info.name,
       image: info.image,
       lifeSpan: info.lifeSpan 
      }
    ));
    
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
    console.log(error)
  }
};

module.exports = {
  getAllDogsDb,
  addNewDog
}