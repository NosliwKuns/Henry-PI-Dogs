const axios = require('axios').default;
const { DOG_API_KEY } = process.env;

const getAllDogsApi = async() => {
  try {
    let { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DOG_API_KEY}`);
    let dog = data.map(info => (
      {
        id: `${info.id}DOG`,
        name: info.name,
        image: info.image.url,
        height: info.height,
        weight: info.weight,
        lifeSpan: info.life_span,
      }
    ));

    return dog;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllDogsApi,
}