import React from 'react';
import { render } from '@testing-library/react';
import Medicaments from './Medicaments';

test('renders without crashing', () => {
  const { baseElement } = render(<Medicaments />);
  expect(baseElement).toBeDefined();
});
