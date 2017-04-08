
import React from 'react'
import renderer from 'react-test-renderer'

// import { expect } from 'chai'

import App from '../App.jsx'

describe('App', () => {
  let { TestUtils } = React.addons;
  
  it('does', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
