import React from 'react'

import careers_img from './images/career.jpg'

class Careers extends React.Component {
  render () {
    return (
      <div>
        <h1>Careers</h1>
        <img src={careers_img} alt="careers" />
        <p>We don't have any vacancies at this time.</p>
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

export default {
  Careers,
  DesignerCareer,
}
