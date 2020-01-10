import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import AppRouter from '../App/AppRouter'
import careers_img from './images/career.jpg'
import axios from 'axios';
import {connect} from 'react-redux';
import {listCareers} from '../../actions/CareersAction';
import CareersList from './CareersList';
import moment from 'moment';
import Spinner from 'react-spinner-material';

// import Loader from 'react-loader-spinner';

/* class Descr extends React.Component {
  render () {
    console.log('+++ Descr:', this.props)
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            here
            <br /><br /><br />&nbsp;
          </Col>
        </Row>
      </Grid>
    )
  }
} */

class Career extends React.Component {
  componentDidMount(){
    if(!this.props.careerFetched){
      this.props.listCareers()
    }
  }

  render () {
    // console.log('+++ Career:', this.props)
    const { data } = this.props;
    let selectedData = null;
    let title = '';
    let date = '';
    if(!this.props.careerFetched){
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Spinner size={30} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
        </div>
      )
    }
    
    (data != undefined || data.length != 0 ) && data.forEach((content, index) =>{
      if(content.id == this.props.params.which) {
        selectedData = content.content.rendered;
        title = content.title.rendered;
        date =  moment(content.date).format('LLL');
        return  selectedData
      }
    })
    return (
      <div>
        <div style={{ backgroundImage: `url(${careers_img})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Careers</h1>
            </div>
          </div>
        </div>

        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <CareersList />
              <h3>{title}</h3>
              <p><strong>Date: </strong> {date}</p>
              <div  dangerouslySetInnerHTML={{
                __html: selectedData,
              }}>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>
      )
  }
}



class Careers extends React.Component {

  componentDidMount(){
    this.props.listCareers()
  }

  render () {
    return (
      <div>
        <div style={{ backgroundImage: `url(${careers_img})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Careers</h1>
            </div>
          </div>
        </div>
        <Grid>
          <Row>
            <Col xs={12}>
              <CareersList />
              { this.props.children || <div><br /><br /><br />If available, job postings will appear above.<br /><br /><br />&nbsp;<br /><br /><br /></div> }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

class DesignerCareer extends React.Component {
  render () {
    return (
      <div>designer career</div>
    )
  }
}


const mapStateToProps = state => {
  return {
    careerFetched: state.ui.careerUiReducer.careerFetched,
    careerMessage:  state.ui.careerUiReducer.careerMessage,
    data: state.entities.careersReducer.careersData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listCareers: () => dispatch(listCareers()),
  };
};

export default {
  DesignerCareer,
  Career: connect(mapStateToProps, mapDispatchToProps)(Career),
  Careers: connect(mapStateToProps, mapDispatchToProps)(Careers),
}