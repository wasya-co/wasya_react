
import { combineReducers } from 'redux'
import { CONST } from '../constants'
import careersReducer from './CareersReducer';
import careerUiReducer from './CareersReducerUI';

const apiLocation = () => {
  return 'default-api-location'
}

const navCollapse = (state = true, action) => {
  if (action.type === CONST.navCollapse) {
    return action.val
  }
  return state
}

const entitiesReducers = combineReducers({
  careersReducer
});

const uiReducers = combineReducers({
  careerUiReducer
});


export default combineReducers({
    apiLocation,
    navCollapse,
    entities: entitiesReducers,
    ui: uiReducers,
  })
