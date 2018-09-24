import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from 'components/App';
import About from 'components/About';
import Intro from 'components/Intro';
import Navbar from 'components/Navbar';
import Root from 'Root';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('loads About component with "/about" path', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[ '/about' ]}>
        <App />
      </MemoryRouter>
    </Root>
  );
  expect(wrapped.find(About).length).toEqual(1);
});

it('loads Intro component with "/intro" path', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[ '/intro' ]}>
        <App />
      </MemoryRouter>
    </Root>
  );
  expect(wrapped.find(Intro).length).toEqual(1);
});

it('loads Navbar component', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    </Root>
  );
  expect(wrapped.find(Navbar).length).toEqual(1);
});
