import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import Navbar from 'components/Navbar';
import { MemoryRouter } from 'react-router-dom';

let wrapped;

it('loads content', () => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[ '/' ]}>
        <Navbar />
      </MemoryRouter>
    </Root>
  );
  expect(wrapped.render().text()).toContain("Goodminder");
});
