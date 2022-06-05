export const GET_ALL_DOGS = 'GET_ALL_DOGS'

export const getAllDogs = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/dogs');
  const payload = await response.json();
  dispatch({ type: GET_ALL_DOGS, payload });
}