import React from 'react';
import { shallow } from 'enzyme';

import Navbar from 'components/Navbar';

let wrapped;

it('loads content', () => {
  wrapped = shallow(<Navbar />);
  expect(wrapped.render().text()).toContain("Goodminder");
});
