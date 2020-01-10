import * as Constants from '../constants/index';
import axios from 'axios';


export const listCareers = () => dispatch => {
  dispatch({
    type: Constants.FETCH_CATEGORY_REQUEST,
  });

  axios.get('https://piousbox.com/wp-json/wp/v2/posts?categories=59')
    .then(data => {
      dispatch({
        type: Constants.FETCH_CATEGORY_SUCCESS,
        payload: data.data,
      });
    }) 
    .catch(error => {
      dispatch({
        type: Constants.FETCH_CATEGORY_FAILURE,
        payload: error,
      });
    });
};