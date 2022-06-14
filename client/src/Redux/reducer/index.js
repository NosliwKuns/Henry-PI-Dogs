import { 
  GET_ALL_DOGS, 
  GET_TEMPERAMENTS, 
  GET_DETAIL, 
  SEARCH_BY_NAME, 
  FILTER_BY_TEMP, 
  ALPHABETICAL_ORDER ,
  COMES_FROM
} from '../actions';


const initialState = {
  allDogs: [],
  temperaments: [],
  detail: [],
  searchDogs: [],
  api: [],
  db: [], 
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
        allDogs: action.payload
      }
    case FILTER_BY_TEMP:
      return {
        ...state,
        allDogs: action.payload
      }
    case ALPHABETICAL_ORDER:
      const newArrDogs = state.allDogs.map(e => e);
      const alphOrder = action.payload === 'ASC' ? 
      [...newArrDogs.sort((a, b) => a.name.localeCompare(b.name))]
      :
      [...newArrDogs.sort((a, b) => b.name.localeCompare(a.name))];

      return {
        ...state,
        allDogs: alphOrder
      }
    case COMES_FROM:
      return {
        ...state,
        allDogs: action.payload
      }

    default: return initialState;
  }
};

export default rootReducer;