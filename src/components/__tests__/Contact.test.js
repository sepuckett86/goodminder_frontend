import React from 'react';
import { shallow } from 'enzyme';

import Contact from 'components/Contact';

let wrapped;

it('loads content', () => {
  wrapped = shallow(<Contact />);
  expect(wrapped.render().text()).toContain("Contact");
  wrapped.unmount();
});
