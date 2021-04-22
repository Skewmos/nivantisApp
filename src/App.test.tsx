import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});


test('page should have a title of Médicaments', async () => {
  const { findByText } = render(<App />);
  await findByText('Médicaments');
});