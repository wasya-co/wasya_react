import React from 'react'

import {
  Grid, Row, Col,
  Button, Panel,
} from 'react-bootstrap'
import FacebookLogin      from 'react-facebook-login'
import { Elements, StripeProvider } from 'react-stripe-elements'

import MyCheckout from './MyCheckout'

const responseFacebook = (r) => {
  console.log("+++ response:", r)
}

class Account extends React.Component {
  clicked = (e) => {
    console.log('+++ clicked!', e)
  }

  render () {
    return (
      <Grid >
        <Row>
          <Col xs={12}>
            <h1>Account</h1>
            <hr />
            { /* <FacebookLogin appId="1153311984801324" autoLoad={true} fields="name,email,picture" onClick={this.clicked} callback={responseFacebook} /> */ }
            <Panel>
              <h5>Pay Invoice</h5>
              <form>
                <label>Email</label>
                <input type="text" placeholder="your@email.com" />
                <label>Invoice #</label>
                <input type="text" placeholder="Invoice Number" />
                <label>Amount</label>
                <input type="number" placeholder="Amount" />
                
                <StripeProvider apiKey="pk_test_qr1QPmSpLdBFt1F7itdWJOj3" >
                  <MyCheckout />
                </StripeProvider>

                <Button>Go</Button>
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Account
