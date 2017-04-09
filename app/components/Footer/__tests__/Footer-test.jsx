import React from 'react'
import Footer from '../Footer.jsx'
import { expect } from 'chai'
import renderer from 'react-test-renderer'

text('this', () => {
  expect(1).to.equal(2);
});

describe('Footer', () => {
  it('Should have the correct footer element', () => {
    let footer = TestUtils.renderIntoDocument(
      <Footer />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');
  });
});
