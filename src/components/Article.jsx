
import {
  Card, CardContent, CardTitle, Container,
  Grid,
  Link,
} from "@material-ui/core"

import React from "react"
import { withRouter } from 'react-router-dom'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: { content: {}, title: {}, },
    }
    fetch(`https://piousbox.com/wp-json/wp/v2/posts/?slug=${props.match.params.slug}`).then(r=>r.json()).then(results => {
      // console.log('+++ results 1:', results[0])
      this.setState({ article: results[0]})
    })
  }

  componentWillReceiveProps = (nextProps) => {
    fetch(`https://piousbox.com/wp-json/wp/v2/posts/?slug=${nextProps.match.params.slug}`).then(r=>r.json()).then(results => {
      // console.log('+++ results 2:', results[0])
      this.setState({ article: results[0]})
    })
  }

  render () {
    // console.log('+++ render Article:', this.props, this.state)
    // console.log('_++ this:', this.props.match.params.slug)
    let a = this.state.article

    return (
      <React.Fragment>
        <Container fixed>
          <h1>{a.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{__html: a.content.rendered}}></div>
        </Container>
      </React.Fragment>)
  }
}

export default withRouter(props => <Article {...props} />)
