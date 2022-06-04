const { getAllDogsApi } = require('./apiController');
const { getAllDogsDb } = require('./dbController')

const getAllDogs = async () => {
  const dogsApi = await getAllDogsApi();
    const dogsDb = await getAllDogsDb();
    const dogs = [...dogsApi, ...dogsDb];

  return dogs;
};

module.exports = {
  getAllDogs,
}