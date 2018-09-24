import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import Navbar from 'components/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('when user is logged out', () => {
  let wrapped;
  wrapped = mount(
    <Root initialState = {{ auth: false }}>
      <MemoryRouter initialEntries={[ '/' ]}>
        <Navbar />
      </MemoryRouter>
    </Root>
  );
  afterEach(() => {
    wrapped.unmount();
  });
  it('has navbar with functional "Log In" link', () => {
    // Has Log In link
    expect(wrapped.render().text()).toContain('Log In');
    // Find Log In link and click it
    wrapped.find('.logIn').simulate('click');
    wrapped.update();
    expect(wrapped.render().text()).toContain('Log Out');
  });
});


describe('when user is logged in', () => {
  let wrapped;
  wrapped = mount(
    <Root initialState = {{ auth: true }}>
      <MemoryRouter initialEntries={[ '/' ]}>
        <Navbar />
      </MemoryRouter>
    </Root>
  );
  afterEach(() => {
    wrapped.unmount();
  });
  it('has navbar with functional "Log Out" link', () => {
    // Has Log In link
    expect(wrapped.render().text()).toContain('Log Out');
    // Find Log In link and click it
    wrapped.find('.logIn').simulate('click');
    wrapped.update();
    expect(wrapped.render().text()).toContain('Log In');
  });
});
