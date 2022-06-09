import { GET_ALL_DOGS } from '../actions';
import { GET_TEMPERAMENTS } from '../actions';

const initialState = {
  allDogs: [],
  temperaments: []
};

const rootReducer =  (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload
      }
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload
      }
    default: return initialState;
  }
};

export default rootReducer;