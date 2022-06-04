const { getAllDogs } = require('./reqController');
const { addNewDog } = require('./dbController');

const getDogs = async (req, res) => {
  try {
    const allDogs = await getAllDogs();
    res.json(allDogs);
  } catch (error) {
    res.status(400).json({msg: error});
  }
};

const newDogs = async (req, res) => {
  try {
    const { name, image, height, weight, lifeSpan } = req.body;
    if(!name || !image || !height || !weight || !lifeSpan) {
      throw new Error ('error')
    }

    const newDogAdded = await addNewDog(req.body);
    res.json(newDogAdded);
  } catch (error) {
    res.status(400).json({msg: 'nop'});
  }
};

module.exports = {
  getDogs,
  newDogs
}