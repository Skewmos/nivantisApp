import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import Visualisation from './visualisation';

test('renders without crashing', () => {
    const { baseElement } = render(<Visualisation  />);
    expect(baseElement).toBeDefined();
  });