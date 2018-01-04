import React    from 'react'
import ReactDOM from 'react-dom'

import { Panel } from 'react-bootstrap'
import Center from '../Center'

class Service extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fadeAnim: 'fade-anim-pre', posY: 0 }

    this.componentDidMount    = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleScroll         = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    this.setState({ posY: ReactDOM.findDOMNode(this).getBoundingClientRect().top })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if (window.scrollY > this.state.posY - window.innerHeight/2) {
      console.log('set state!')
      this.setState({ fadeAnim: 'fade-anim', })
    }
  }

  render() {
    // console.log('+++ +++ render Service: ', this.props, this.state)

    let service = this.props.service
    let image   = require(`./images/400x200/${service.short}.jpg`)
    
    return (
      <div className="drop-shadow" >
        <Center>
          <img className={this.state.fadeAnim} src={image} alt={service.title} style={{ maxWidth: '100%' }} />
          <h3>{service.title}</h3>
          <div className="dez-separator-outer "><div className="dez-separator style-icon"><i className="fa fa-leaf"></i></div></div>
        </Center>
        <div style={{ padding: '1em' }} >
          {service.descr.map(function(d, idx) {
             return <p className="text-justify" key={idx} >{d}</p>
           })}
        </div>
      </div>
    )
  }
}

export default Service
