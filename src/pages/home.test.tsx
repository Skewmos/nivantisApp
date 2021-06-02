import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import Home from './home';

test('renders without crashing', () => {
    const { baseElement } = render(<Home  />);
    expect(baseElement).toBeDefined();
  });