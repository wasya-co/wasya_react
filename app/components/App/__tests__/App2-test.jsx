
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme()) // Note the invocation at the end

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import renderer from 'react-test-renderer'

import App from '../App.jsx'

describe('App', () => {
  let { TestUtils } = React.addons;
  
  it('does', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})

