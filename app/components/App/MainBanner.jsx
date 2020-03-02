import React from 'react'

import bg2 from './images/circuit-boards/2-narrow.jpg'
import bg4 from './images/background/bg4.jpg'

class MainBanner extends React.Component {
  render () {
    return (
      <div id='mainBanner' style={{ 
        position: 'relative',
        maxHeight: '80vh',
        height: '80vh',
        overflow: 'hidden',
      }} >
        <video autoPlay="autoPlay" muted="muted" loop='loop' style={{ 
          minWidth: '100%',
          minHeight: '56.25vw',
          zIndex: -2,
          position: 'absolute',
          bottom: 0,
        }} >
          <source src="https://s3.amazonaws.com/ish-wp/wp-content/uploads/2020/03/02004532/video.mp4"
            type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, height: '80vh', }} className="dez-bnr-inr dez-bnr-inr-lg " >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Rapid Software Development</h1>
              <h3 className="text-white">Innovative Technical Solutions</h3>
            </div>
          </div>
        </div>
        <div id="blueSilicon" style={{ 
          backgroundImage: `url(${bg2})`, 
          height: '20px', 
          width: '100%', 
          backgroundSize: "100%, 100%",
          position: 'absolute',
          bottom: 0,
          zIndex: 5,
        }} className="bg-img-fix" />
      </div>
    )
  }
}

export default MainBanner
