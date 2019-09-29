import React from "react"
import * as Icon from "react-feather"
import styled from "styled-components"

import {
  Container,
  Grid,
  Hidden,
  List, Link, ListItemText,
  ListItem as ListItem2,
  ListItem as MuiListItem,
  Typography,
} from "@material-ui/core"

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing(1) / 4}px
    ${props => props.theme.spacing(4)}px;
  background: ${props => props.theme.palette.common.white};
  position: relative;
`;

const ListItem = styled(MuiListItem)`
  display: inline-block;
  width: auto;
  padding-left: ${props => props.theme.spacing(2)}px;
  padding-right: ${props => props.theme.spacing(2)}px;

  &,
  &:hover,
  &:active {
    color: #000;
  }
`;

class Footer extends React.Component {
  render () {
    return (
      <Wrapper>
        <Container fixed >
          <Grid container style={{margin: '12px 0 50px 0'}}>
            <Grid item md={4}>
              <Typography style={{ padding: '16px' }} >© 2019 - Wasya Co</Typography>
            </Grid>
            <Grid item md={4}>
              <List>
                <ListItem2><Link href="/pages/terms_and_conditions">Terms and Conditions</Link></ListItem2>
                <ListItem2><Link href="/pages/sitemap.xml">Sitemap</Link></ListItem2>
              </List>
            </Grid>
            <Grid item md={4}>
              <List>
                <ListItem><Icon.Facebook /></ListItem>
                <ListItem><Icon.Linkedin /></ListItem>
                <ListItem><Icon.Twitter /></ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    )
  }
}

export default Footer
