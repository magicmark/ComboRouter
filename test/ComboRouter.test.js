import React from 'react';
import { render } from 'react-testing-library';
import ComboRouter from '../src/components/ComboRouter';

// smoke test
it('ComboRouter renders correctly', () => {
  const { container } = render(<ComboRouter><p>foo</p></ComboRouter>);
  expect(container.firstChild).toMatchSnapshot();
});
