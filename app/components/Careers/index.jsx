import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router'

import AppRouter from '../App/AppRouter'
import careers_img from './images/career.jpg'

/* class Descr extends React.Component {
  render () {
    console.log('+++ Descr:', this.props)
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            here
            <br /><br /><br />&nbsp;
          </Col>
        </Row>
      </Grid>
    )
  }
} */

class CareersList extends React.Component {
  render () {
    return (
      <div className="CareersList" style={{ 
        borderBottom: "3px solid gray",
        margin: "2rem 0",
        padding: "2rem",
       }} >
        <ul>
          <li><Link to={AppRouter.careerLink('20180617')}>20180617 - Foundation Email Rails Campaign</Link></li>
          <li><Link to={AppRouter.careerLink('20180619')}>20180619 - BJJC convertion to Wordpress</Link></li>

          { /* 
          <li><Link to={AppRouter.careerLink('20180619a')}>20180619a - GameUI - Freelance UIUX expert needed</Link></li>
          <li><Link to={AppRouter.careerLink('20180619b')}>20180619b - CoT - Freelance UIUX expert needed</Link></li>
          <li><Link to={AppRouter.careerLink('20180619c')}>20180619c - TGM - Freelance creative writer needed</Link></li> 
          <li><Link to={AppRouter.careerLink('20180619d')}>20180619d - CoT - Spanish-speaking operations manager needed</Link></li> 
          */ }
        </ul>
      </div>
    )
  }
}

class Career extends React.Component {
  render () {
    // console.log('+++ Career:', this.props)

    const desc = {
      '20180617': (
        <div>
          <h3>Frontend Developer needed: mockup of an email campaign; conversion of the mockup to HTML/CSS using Foundation framework.</h3>
          <p>This posting is for two parts of the same job: creating a mockup of an email marketing letter; and consequently converting that to HTML/CSS. In your response, include whether you are applying to do the mockup, the HTML/CSS coding, or both.</p>
          <p>This gig requires previous experience. If you have not done a landing page or an email campaign in the past, please do not apply.</p>
          <p>Copy and assets will be provided. This email campaign will be similar to a previously-run email campaign. The goal of this task is to create a much better-looking email campaign than what I have used previously (that is where you skill and talent comes in).</p>
          <p>Designers, you can find the previous email letter here: <a href="https://wasya.co/archive/2018/marketing-react.html">https://wasya.co/archive/2018/marketing-react.html</a> I'm looking for design quality that is better than this linked document. </p>
          <p>Coders, you can find the source of the previous campaign here: <a href="https://github.com/piousbox/foundation_email_marketing/blob/0.0.0/dist/marketing-react.html">https://github.com/piousbox/foundation_email_marketing/blob/0.0.0/dist/marketing-react.html</a> Note that this repository is a complete project, and the successful candidate will be expected to use this framework. </p>
          <p>In your response, please include the following:</p>
          <ul>
            <li>A screenshot of your desktop, with an open window listing your computer's hardware characteristics.</li>
            <li>
              If you would like to work on the mockup part of the task: 
              <ul style={{ margin: '0 0 2rem 2rem' }} >
                <li>What is x, x=19+6/5 ?</li>
                <li>Provide a sample mockup that you have done in the past, in raw format (psd, ai or similar so that I can see the layers)</li>
                <li>Optionally, provide a link to your portfolio or your preferred online profile</li>
              </ul>
            </li>
            <li>
              If you would like to work on the HTML/CSS part: 
              <ul style={{ margin: '0 0 2rem 2rem' }} >
                <li>What is y, y=13-4/3?</li>
                <li>Provide a sample code of a landing page of an email letter that you have done. Bonus points if you provide the sourcecode project that includes all source files.</li>
                <li>How many years of experience do you have using node.js?</li>
                <li>How many years of experience do you have using git?</li>
                <li>In CSS, what does "div.isi.on + p.arti.tion {'{ flex: 1 }'}" do?</li>
                <li>Optionally, include a link to your github or any other preferred online profile.</li>
              </ul>
            </li>
          </ul>
          <p>If you would like to work on both the mockup and HTML/CSS, then answer all questions above, and provide both mockup sample, and code sample.</p>
          <p>To apply, send an email to victor at wasya dot co, or communicate with me via the channel where the job was originally posted.</p>
        </div>),
      '20180619': (
        <div>
          <h3>BJJCollective.com convertion to Wordpress</h3>
          <p>We are converting this website to wordpress: http://bjjcollective.com A copy of the database, assets, and code will be provided. The database and assets (images) are useful. We discourage recycling old code; this should be a clean rewrite.</p>
          <p>BJJC is a video aggregator for youtube, specifically for martial arts technique videos.</p>
          <p>There are two interesting parts to the task. First, the javascript-heavy categorization system. Every video belongs to a category, and categories are hierarchical. A category has an image asset, and the UI allows for drilling down to a category in a convenient manner. The new Wordpress-based categorization tree should mimic what is already there.</p>
          <p>The second interesting part is the video pages: index, and show. A video can be commented on. Every category is a videos-index page, where selecting one video displays video-show page. This is simple compared to the categorization tree.</p>
          <p>The new system should allow an admin to easily add/remove/manager categories, and add/remove/manage videos.</p>
          <p>We expect data models to change; data migration should be scripted, and is an expected step in this rewrite.</p>
          <p>We expect to use jQuery. Each category should be its own page for SEO purposes. </p>
          <p>We are looking for: (1) mockup of a design, and (2) implementation. The mockup should have the following pages:
            <ul>
              <li>list of categories, which should closely resemble what is there now.</li>
              <li>view of a category (same as a list of videos). Videos should be paginated.</li>
              <li>view of a single video. The videos list, and the categorization tree, should be easily accessible from this page.</li>
            </ul>
          </p>
          <p>In your application, please estimate time and cost of creating the mockup, and time and cost of implementing it in wordpress & jQuery. The successful candidate will be asked to work on this project iteratively and incrementally. Please submit the application to victor at wasya dot co, along with a link to this page.</p>
        </div>),
      '20180619a': (
        <div>
          <h3>GameUI - Freelance UIUX expert needed</h3>
        </div>),
      '20180619b': (
        <div>
          <h3>CoT - Freelance UIUX expert needed</h3>
        </div>),
      '20180619c': (
        <div>
          <h3>TGM - Freelance creative writer needed</h3>
        </div>),
    }

    return (
      <div>
        <div style={{ backgroundImage: `url(${careers_img})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Careers</h1>
            </div>
          </div>
        </div>

        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <CareersList />
              { desc[this.props.params.which] }
            </Col>
          </Row>
        </Grid>

      </div>
      )
  }
}



class Careers extends React.Component {
  render () {
    return (
      <div>
        <div style={{ backgroundImage: `url(${careers_img})` }} className="dez-bnr-inr overlay-black-middle">
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Careers</h1>
            </div>
          </div>
        </div>

        <Grid>
          <Row>
            <Col xs={12}>
              <CareersList />
              { this.props.children || <div><br /><br /><br />If available, job postings will appear above.<br /><br /><br />&nbsp;<br /><br /><br /></div> }
            </Col>
          </Row>
        </Grid>

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
  Career,
  Careers,
  DesignerCareer,
}
