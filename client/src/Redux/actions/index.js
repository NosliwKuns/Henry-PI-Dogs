import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';

export const getAllDogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/dogs');
  return dispatch({ type: GET_ALL_DOGS, payload: data });
};

export const getTemperament = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/temp');
  return dispatch({ type: GET_TEMPERAMENTS, payload: data});
};

export const postDog = (info) => async () => {
  try {
    const send = await axios.post('http://localhost:3001/dogs', info);
    console.log(send.data);
    return send; 
  } catch (error) {
    console.log(error);
  }
}