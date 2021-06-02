import { render } from '@testing-library/react';
import Visualisation from './visualisation';
test('renders without crashing', () => {
    const { baseElement } = render(<Visualisation />);
    expect(baseElement).toBeDefined();
});
