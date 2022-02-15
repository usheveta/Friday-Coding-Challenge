import { render, screen } from '@testing-library/react';
import GetCarModel from '../GetCarModel';

test('renders Select car Model dropdown with selected value as Fiesta', () => {
  render(<GetCarModel />);
  const carModelDropdown = screen.getByRole('combobox',{name:/select car model/i});
  user.selectOptions(carModelDropdown,within(carModelDropdown).getByRole('option',{name: 'Fiesta'/i}));

  expect(carModelDropdown).toBeInTheDocument();
});