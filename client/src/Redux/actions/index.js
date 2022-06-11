import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_DETAIL = 'GET_DETAIL';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

export const getAllDogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/dogs');
  return dispatch({ type: GET_ALL_DOGS, payload: data });
};

export const getTemperament = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/temp');
  return dispatch({ type: GET_TEMPERAMENTS, payload: data});
};

export const postDog = (info) => async () => {
    const send = await axios.post('http://localhost:3001/dogs', info);
    console.log(send.data);
    return send; 
};

export const getDetail = (idBreed) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/dogs/${idBreed}`);
  return dispatch({ type: GET_DETAIL, payload: data});
};

export const searchByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/dog?name=${name}`);
    return dispatch({ type: SEARCH_BY_NAME, payload: data })  
  } catch (error) {
    return dispatch({ type: SEARCH_BY_NAME, payload: error.message })
  }
};