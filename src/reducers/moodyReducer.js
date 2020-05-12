import { STUDY, EAT_SNACK, TAKE_NAP, DRINK_COFFEE } from '../actions/moodyActions';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case STUDY: 
      return { ...state, study: state.study 
    + 1 };
    case DRINK_COFFEE: 
      return { ...state, coffee: state.coffee 
    + 1 };
    case TAKE_NAP: 
      return { ...state, nap: state.nap 
    + 1 };
    case EAT_SNACK: 
      return { ...state, eat: state.eat 
    + 1 };
    default:
      return state;
  }
}
