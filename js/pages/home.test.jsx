import { render } from '@testing-library/react';
import Home from './home';
test('renders without crashing', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeDefined();
});
