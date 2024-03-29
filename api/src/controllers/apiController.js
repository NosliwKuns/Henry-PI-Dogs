const axios = require('axios').default;
const { DOG_API_KEY } = process.env;

const apiLink = 'https://api.thedogapi.com/v1/breeds'

const getAllDogsApi = async () => {
  try {
    let { data } = await axios.get(`${apiLink}?api_key=${DOG_API_KEY}`);
    let dog = data.map(info => (
      {
        id: info.id,
        name: info.name,
        image: info.image.url,
        min_height: Number(info.height.metric.split(' - ')[0]),
        max_height: Number(info.height.metric.split(' - ')[1]),
        min_weight: Number(info.weight.metric.split(' - ')[0]),
        max_weight: Number(info.weight.metric.split(' - ')[1]),
        life_span: info.life_span,
        temperaments: info.temperament?.split(', '),
        from: 'api'
      }
    ));
    return dog;

  } catch (error) {
    console.log(error);
  }
};

const getTemperamentsApi = async () => {
  try {
    let { data } = await axios.get(`${apiLink}?api_key=${DOG_API_KEY}`);
    let temps = data.map(dog => dog.temperament ? dog.temperament 
                : "Not found").flatMap(dog => dog.split(', '));
    let result = temps.filter((e, i) => temps.indexOf(e) === i && e !== "Not found").sort()
    return result
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllDogsApi,
  getTemperamentsApi
}