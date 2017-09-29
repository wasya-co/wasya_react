import React from 'react'

import bg8 from './images/circuit-boards/4.jpg'
import bg9 from './images/background/fire_2-short.jpg'

class MainBanner extends React.Component {
  render () {
    return (
      <div>
        <div className="dez-bnr-inr dez-bnr-inr-lg overlay-black-middle" style={{ backgroundImage: `url(${bg8})` }}>
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Software Development & Consulting in South Bay Area</h1>
              <h5 className="text-white">Implementing performant, efficient processes & tools</h5>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${bg9})`, height: '20px', width: '100%', backgroundSize: "100%, 100%" }} className="bg-img-fix" />
      </div>
    )
  }
}

export default MainBanner
