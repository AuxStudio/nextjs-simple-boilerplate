import React from 'react';
import renderer from 'react-test-renderer';

import Home from '..';

jest.mock('../../../components/DevInfo', () => 'DevInfo');

describe('Home', () => {
  describe('renders', () => {
    it('renders with minimum required props', () => {
      const component = renderer.create(<Home />);

      expect(component).toMatchSnapshot();
    });
  });
});
