import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_DETAIL = 'GET_DETAIL';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP';
export const ALPHABETICAL_ORDER = 'ALPHABETICAL_ORDER';
export const COMES_FROM = 'COMES_FROM';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const ORDER_BY_HEIGHT = 'ORDER_BY_HEIGHT';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const CLEAN_HOME = 'CLEAN_HOME';

const objectToArray = (array) =>{
  const dogSearch = array.map( e => e);
  dogSearch.forEach( e => e.temperaments && typeof e.temperaments[0] !== 'string' ? e.temperaments = e.temperaments.map( e => e.name) : 'noooo');
  return dogSearch
}

export const getAllDogs = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/dogs');
  return dispatch({ type: GET_ALL_DOGS, payload: objectToArray(data) });
};

export const getTemperament = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/temps');
  return dispatch({ type: GET_TEMPERAMENTS, payload: data});
};

export const postDog = (info) => async () => {
    const send = await axios.post('http://localhost:3001/dogs', info);
    return send; 
};

export const getDetail = (idBreed) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/dogs/${idBreed}`);
  return dispatch({ type: GET_DETAIL, payload: data});
};

export const filterByTemp = (name) => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/dogs');
  const dogSearch = objectToArray(data)
  const newFilter = dogSearch.filter(e => e.temperaments && e.temperaments.includes(name));
  return dispatch({ type: FILTER_BY_TEMP, payload: name === 'All' ? data : newFilter });
};

export const searchByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/dog?name=${name}`);
    return dispatch({ type: SEARCH_BY_NAME, payload: objectToArray(data) })   
  } catch (error) {
    console.log(error);
    return dispatch({ type: SEARCH_BY_NAME, payload: error.message })
  }
};

export const alphabeticalOrder = (value) => {
  return { type: ALPHABETICAL_ORDER, payload: value }
}

export const comesFrom = (value) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/created?from=${value}`);
    return dispatch({ type: COMES_FROM, payload: objectToArray(data) }) 
  } catch (error) {
    return dispatch({ type: COMES_FROM, payload: error.message })
  }
};

export const orderByWeight = (value) => {
  return { type: ORDER_BY_WEIGHT, payload: value}
};

export const orderByHeight = (value) => {
  return { type: ORDER_BY_HEIGHT, payload: value}
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL, payload: [] }
};

export const cleanHome = () => {
  return { type: CLEAN_HOME, payload: [] }
};

export const deleteBreed = (idBreed) => async () => {
  await axios.delete(`http://localhost:3001/delete/${idBreed}`);
};