import * as Constants from '../constants/index';

const inititalState = {
  careersData: [],
};

export default function categoryReducer(state = inititalState, action) {
  switch (action.type) {
  case Constants.FETCH_CATEGORY_SUCCESS:
    return Object.assign({}, state, {
      careersData: action.payload,
    });
    
  default:
    return state;
  }
}