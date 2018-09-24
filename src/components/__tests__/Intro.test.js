import React from 'react';
import { shallow } from 'enzyme';

import Intro from 'components/Intro';
import Root from 'Root';
import { MemoryRouter } from 'react-router-dom';

let wrapped;

it('loads content', () => {
  wrapped = shallow(
    <Root>
      <MemoryRouter initialEntries={[ '/intro' ]}>
        <Intro />
      </MemoryRouter>
    </Root>
  );
  expect(wrapped.render().text()).toContain("Focus");
});
