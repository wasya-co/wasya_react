import React from "react"

class Article extends React.Component {
  render () {
    console.log('+++ render Article:', this.props, this.state)
    console.log('_++ this:', this.props.location)

    return (
      <React.Fragment>
      </React.Fragment>)
  }
}

export default Article
