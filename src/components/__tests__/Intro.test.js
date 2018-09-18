import React from 'react';
import { shallow } from 'enzyme';

import Intro from 'components/Intro';

let wrapped;

it('loads content', () => {
  wrapped = shallow(<Intro />);
  expect(wrapped.render().text()).toContain("Intro");
});
