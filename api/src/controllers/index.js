const { getAllDogs } = require('./reqController');
const { addNewDog, getAllTemps } = require('./dbController');
const { Temperament, Dog } = require('../db');
const axios = require('axios').default;


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
    if(idBreed === null) {
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
}

// const t =  async (req, res) => {
//     const temperament = req.query.temperament;
//     const everyDog = await getAllDogs();
//     const dogSearchResult = everyDog.filter((dog) => {
//         if (temperament === 'all') return everyDog
//         else if (dog.temperament) {
//             return (dog.temperament.toLowerCase()).includes(temperament.toLowerCase())
//         }
//     });
//     res.status(200).json(dogSearchResult)
// };




// const b = async (req, res) => {
//   var { // takes these properties to build the new dog
//       name,
//       height,
//       weight,
// /*       height_min,
//       height_max,
//       weight_min,
//       weight_max, */
//       life_span,
//       temperament,
//       image,
//   } = req.body;
  
//   if(!image){
//       try {
//           image = await (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message;
//       } catch (error) {
//           console.log(error)
//       }
//   }

//   if (name && height && weight && temperament && image) {
//       // takes that data for the new dog  
//       const createDog = await Dog.create({
//           name: name,
//           height: height,
//           weight: weight, 
//           life_span: life_span,
//           image: image || 'https://dog.ceo/api/breeds/image/random',
//       });
//       temperament.map(async el => {
//           const findTemp = await Temperament.findAll({
//               where: { name: el }
//           });
//           createDog.addTemperament(findTemp);
//       })
//       res.status(200).send(createDog);
//   } else {
//       res.status(404).send('Data needed to proceed is missing');
//   }
// };

// const { DOG_API_KEY } = process.env;

// const apiLink = 'https://api.thedogapi.com/v1/breeds'

// const c = async (req, res) => {
//     const allData =  await axios.get(`${apiLink}?api_key=${DOG_API_KEY}`)
//     try {
//         let everyTemperament = allData.data.map(dog => dog.temperament ? dog.temperament : "No info").map(dog => dog?.split(', '));
//         /* Set para hacer UNIQUE :: Stackoverflow */
//         let eachTemperament = [...new Set(everyTemperament.flat())];
//         eachTemperament.forEach(el => {
//             if (el) { // temperament : ,
//                 Temperament.findOrCreate({
//                     where: { name: el }
//                 });
//             }
//         });
//         eachTemperament = await Temperament.findAll();
//         res.status(200).json(eachTemperament);
//     } catch (error) {
//         res.status(404).send(error)
//     }
// };


module.exports = {
  getDogs,
  newDogs,
  getDetailById,
  getDogsByName,
  Temperaments,
  getAllTemps,
  comesFrom,
  /* filtTemp, */
/*   b,
  c,
  t */
}