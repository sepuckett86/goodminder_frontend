import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import About from 'components/About';
import Intro from 'components/Intro';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('loads About component', () => {
  expect(wrapped.find(About).length).toEqual(1);
});

it('loads Intro component', () => {
  expect(wrapped.find(Intro).length).toEqual(1);
});
