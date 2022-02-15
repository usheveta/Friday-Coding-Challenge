import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

test('renders Select car Make dropdown with selected value as FORD', () => {
  render(<Home />); 
  const carMakerDropdown = screen.getByRole('combobox',{name:/select car make/i});
  user.selectOptions(carMakerDropdown,within(carMakerDropdown).getByRole('option',{name: 'FORD'/i}));
  expect(carMakerDropdown).toBeInTheDocument();  
});

