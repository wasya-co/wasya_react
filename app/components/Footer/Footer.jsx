import styles from './_Footer.scss';
import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    var year = (new Date()).getFullYear();
    return (
      <footer className={styles.footer}>
        <Grid >
          <Row className="show-grid" >
            <Col xs={6}>&nbsp;</Col>
            <Col xs={6}>&copy; Your Company&nbsp;{year}</Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}
