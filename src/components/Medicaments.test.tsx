import React from 'react';
import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import Medicaments from './Medicaments';

test('renders without crashing', () => {
  const { baseElement } = render(<Medicaments  />);
  expect(baseElement).toBeDefined();
});

test('content name of app' , () => {
  render(<Medicaments /> );
  const title = screen.getByText('NIVANTISAPP'); 
  expect(title).toBeInTheDocument();
})
