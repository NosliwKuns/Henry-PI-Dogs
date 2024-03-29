import { 
  GET_ALL_DOGS, 
  GET_TEMPERAMENTS, 
  GET_DETAIL, 
  SEARCH_BY_NAME, 
  FILTER_BY_TEMP, 
  ALPHABETICAL_ORDER ,
  COMES_FROM,
  ORDER_BY_WEIGHT,
  ORDER_BY_HEIGHT,
  CLEAN_DETAIL,
  CLEAN_HOME
} from '../actions';


const initialState = {
  allDogs: [],
  temperaments: [],
  detail: [],
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
      /* const newArrDogs = state.allDogs.map(e => e); */
      const alphOrder = action.payload === 'ASC' ? 
      [...state.allDogs.sort((a, b) => a.name.localeCompare(b.name))]
      :
      [...state.allDogs.sort((a, b) => b.name.localeCompare(a.name))];

      return {
        ...state,
        allDogs: alphOrder
      }
    case COMES_FROM:
      return {
        ...state,
        allDogs: action.payload
      }

    case ORDER_BY_WEIGHT:
      const orderByWeight = action.payload === 'ASC' ?
      [...state.allDogs].sort((a, b) => {

          /* if(a.min_weight === null) { return 0 } */
          if(!a.min_weight) { a.min_weight = a.max_weight}
          if (a.min_weight < b.min_weight) { return -1 }
          if (b.min_weight < a.min_weight) { return 1 }
          return 0;
      }) :
      [...state.allDogs].sort((a, b) => {
          /* if(a.max_weight === null) { return 0 } */
          if(!a.max_weight) { a.max_weight = a.min_weight}
          if (a.max_weight < b.max_weight) { return 1; }
          if (b.max_weight < a.max_weight) { return -1; }
          return 0;
      })
      return {
        ...state,
        allDogs: orderByWeight
      }

    case ORDER_BY_HEIGHT:
      const orderByHeight = action.payload === 'ASC' ?
      [...state.allDogs].sort((a, b) => {
          /* if(a.min_height === null) { return 0 } */
          if(!a.min_height) { a.min_height = a.max_height}
          if (a.min_height < b.min_height) { return -1 }
          if (b.min_height < a.min_height) { return 1 }
          return 0;
      }) :
      [...state.allDogs].sort((a, b) => {
          /* if(a.max_weight === null) { return 0 } */
          if(!a.max_height) { a.max_height = a.min_height}
          if (a.max_height < b.max_height) { return 1; }
          if (b.max_height < a.max_height) { return -1; }
          return 0;
      })
      return {
        ...state,
        allDogs: orderByHeight
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case CLEAN_HOME:
      return {
        ...state,
        allDogs: action.payload
      }


    default: return initialState;
  }
};

export default rootReducer;