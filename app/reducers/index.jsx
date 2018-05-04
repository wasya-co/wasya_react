
import { combineReducers } from 'redux'
import { CONST } from '../constants'

const apiLocation = () => {
  return 'default-api-location'
}

const navCollapse = (state = true, action) => {
  if (action.type === CONST.navCollapse) {
    return action.val
  }
  return state
}

export default combineReducers({
  apiLocation,
  navCollapse,
})
