import React from 'react'
import {
  Elements, injectStripe, CardElement,
} from 'react-stripe-elements'

class CheckoutForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.stripe.createToken({ name: 'johny besos' }).then(({token}) => {
      console.log('+++ received token:', token)
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        { /* <AddressSection />
        <CardSection /> */ }
        <CardElement style={{}} />
        <button>Confirm Order</button>
      </form>
    )
  }
}

const MyCheckoutForm = injectStripe(CheckoutForm)

class MyCheckout extends React.Component {
  render () {
    return (
      <Elements>
        <MyCheckoutForm />
      </Elements>
    )
  }
}

export default MyCheckout 
