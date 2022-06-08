const { getAllDogsApi, getTemperamentsApi } = require('./apiController');
const { getAllDogsDb, addTemperaments } = require('./dbController')

const getAllDogs = async () => {
  const dogsApi = await getAllDogsApi();
  const dogsDb = await getAllDogsDb();
  console.log(dogsDb.temperaments);
  const dogs = [...dogsApi, ...dogsDb];

  return dogs;
};

( async () => {
  const tempsApi = await getTemperamentsApi();
  tempsApi.forEach(async e => {
    const addTempBd = await addTemperaments({name: e})
    return addTempBd;
  })
})()

module.exports = {
  getAllDogs,
}