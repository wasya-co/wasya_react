import React    from 'react'

import { Panel } from 'react-bootstrap'
import Center from '../Center'

class Service extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let service = this.props.service
    let image   = require(`./images/400x200/${service.short}.jpg`)
    
    return (
      <Panel>
        <Center>
          <img src={image} alt={service.title} style={{ maxWidth: '100%' }} />
          <h3>{service.title}</h3>
          <div className="dez-separator-outer "><div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div></div>
        </Center>
        {service.descr.map(function(d, idx) {
           return <p className="text-justify" key={idx} >{d}</p>
         })}
      </Panel>
    )
  }
}

export default Service
