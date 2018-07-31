import React from 'react'

import bg2 from './images/circuit-boards/2-narrow.jpg'
import bg4 from './images/background/bg4.jpg'

class MainBanner extends React.Component {
  render () {
    return (
      <div>
        <div className="dez-bnr-inr dez-bnr-inr-lg overlay-black-middle" style={{ 
          backgroundImage: `url(${bg4})`,
          maxHeight: '500px',
        }}>
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Rapid Software Development</h1>
              <h5 className="text-white">Using agile practices and the modern tech stack to achieve business goals</h5>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${bg2})`, height: '20px', width: '100%', backgroundSize: "100%, 100%" }} className="bg-img-fix" />
      </div>
    )
  }
}

export default MainBanner
