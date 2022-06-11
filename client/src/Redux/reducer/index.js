import { GET_ALL_DOGS } from '../actions';
import { GET_TEMPERAMENTS } from '../actions';
import { GET_DETAIL } from '../actions';
import { SEARCH_BY_NAME } from '../actions';

const initialState = {
  allDogs: [],
  temperaments: [],
  detail: [],
  searchDogs: [],
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
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case SEARCH_BY_NAME:
      return {
        ...state,
        searchDogs: action.payload
      }
    default: return initialState;
  }
};

export default rootReducer;