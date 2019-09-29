
import {
  Card, CardContent, CardTitle, Container,
  Grid,
  Link,
} from "@material-ui/core"
import { spacing } from "@material-ui/system"

import React from 'react'
import { Redirect } from 'react-router-dom'

import styled from "styled-components"

import hero_1 from './hero_1.jpg'
import { R } from '../redux/routes'

const HalfHero = styled.div`
  @media screen and (min-width: 960px) {
    width: 464px;
    float: right;
  }
`;

const Spacer = styled.div`
  height: 100px;
`;
const style = {
  backgroundImage: `url(${hero_1})`,
  height: '500px',
  width: '100%',
};

class Home extends React.Component {

  constructor(props) {
    super(props)
    let articles = []
    fetch(`https://piousbox.com/wp-json/wp/v2/posts/?categories=40`).then(r=>r.json()).then(results => {
      this.setState({ articles: results })
    }).catch(e => {
      console.log('+++ cannot fetch:', e)
    })
    this.state = { articles: [], redirectTo: null }
  }

  goTo = (which) => {
    this.setState({ redirectTo: which })
  }

  render () {
    console.log('+++ render Home:', this.props, this.state)

    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    let rArticles = []
    this.state.articles.length > 0 && this.state.articles.map((a, idx) => {
      let href = R.article(a.slug)
      rArticles.push(
        <div key={idx} >
          <h1 key={idx} ><Link href={href}>{a.title.rendered}</Link></h1>
          <div dangerouslySetInnerHTML={{__html: a.content.rendered}}></div>
          <Spacer mb={4} />
        </div>)
    })

    return (<React.Fragment>
      <Grid spacing={0} container >
        <Grid item md={6}>
          <HalfHero >
            <h1>Welcome!</h1>
          </HalfHero>
        </Grid>
        <Grid item md={6} style={style}>
        </Grid>
      </Grid>
      <Container fixed >
        <Grid container>
          <Grid item md={8}>{ rArticles }</Grid>
          <Grid item md={4}>&nbsp;</Grid>
        </Grid>
      </Container>
    </React.Fragment>)
  }
}

export default Home
