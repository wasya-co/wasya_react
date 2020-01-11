import * as Constants from '../constants/index';

const inititalState = {
  careerMessage: null,
  careerFetching: false,
  careerFetched: false,
  careerError: false,
};

export default (state = inititalState, action) => {
  switch (action.type) {
  case Constants.FETCH_CATEGORY_REQUEST:
    return Object.assign({}, state, {
      careerFetched: false,
      careerFetching: true,
      careerError: null,
    });
  case Constants.FETCH_CATEGORY_SUCCESS:
    return Object.assign({}, state, {
      careerFetched: true,
      careerFetching: false,
    });
  case Constants.FETCH_CATEGORY_FAILURE:
    return Object.assign({}, state, {
      careerMessage: 'loading careers failed',
      careerFetching: false,
      careerError: action.payload,
    });

  default:
    return state;
  }
}