import { GET_ALL_DOGS } from '../actions'

const initialState = {
  allDogs: [],
};

const rootReducer =  (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload
      }
    default: return initialState;
  }
};

export default rootReducer;