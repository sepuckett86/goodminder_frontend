import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from 'components/App';
import About from 'components/About';
import Intro from 'components/Intro';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('loads About component with "/about" path', () => {
  wrapped = mount(<MemoryRouter initialEntries={[ '/about' ]}><App /></MemoryRouter>);
  expect(wrapped.find(About).length).toEqual(1);
});

it('loads Intro component with "/intro" path', () => {
  wrapped = mount(<MemoryRouter initialEntries={[ '/intro' ]}><App /></MemoryRouter>);
  expect(wrapped.find(Intro).length).toEqual(1);
});
