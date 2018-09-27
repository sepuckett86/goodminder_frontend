import React from 'react';
import { mount } from 'enzyme';

import About from 'components/About';

let wrapped;

it('loads content', () => {
  wrapped = mount(<About />);
  expect(wrapped.render().text()).toContain("About");
  wrapped.unmount();
});
