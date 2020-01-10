import React from 'react'
import AppRouter from '../App/AppRouter'
import { Link } from 'react-router'
import {connect} from 'react-redux';
import Spinner from 'react-spinner-material';

class CareersList extends React.Component {
    render () {
      const {data, careerFetched} = this.props;
      if(!careerFetched){
        return (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Spinner size={30} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
          </div>
        )
      }
      return (
        <div className="CareersList" style={{ 
          borderBottom: "3px solid gray",
          margin: "2rem 0",
          padding: "2rem",
         }} >
          <ul>
              {(data != undefined || data.length != 0 ) && data.map((content, index) =>{
                  return(
                  <li key={index}><Link to={AppRouter.careerLink(content.id)}>{content.title.rendered}</Link></li>
                  )
              })}
          </ul>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      careerFetched: state.ui.careerUiReducer.careerFetched,
      data: state.entities.careersReducer.careersData,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps )(CareersList);
  