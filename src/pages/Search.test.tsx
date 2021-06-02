import { render, fireEvent } from '@testing-library/react';
import {screen} from '@testing-library/dom';
import userEvent from '@testing-library/user-event'
import {SearchForm} from './Search';

test('renders without crashing', () => {
    const { baseElement } = render(<SearchForm  />);
    expect(baseElement).toBeDefined();
  });

  test('rendering and submitting a basic Formik form', async () => {
    const handleSubmit = jest.fn()
    render(<SearchForm/>)
  
    userEvent.type(screen.getByLabelText(/search/i), 'Doliprane')
  
    userEvent.click(screen.getByRole('button', { name: /submit/i }))
  
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        search: 'Doliprane',
      }, expect.anything())
    )
  })