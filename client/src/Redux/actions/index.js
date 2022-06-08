import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS'

export const getAllDogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/dogs');
  return dispatch({ type: GET_ALL_DOGS, payload: data });
};

export const postDog = () => async (info) => {
  const send = await axios.post('http://localhost:3001/dogs', info);
  return send;
};