import { render, screen } from '@testing-library/react';
import CarDetails from '../CarDetails';

test('renders HTML table with search box', () => {
  render(<CarDetails />);
  const carDetailSearcBox = screen.getByRole('searchbox');  

  expect(carDetailSearcBox).toBeInTheDocument();

  const carDetailTable = screen.getByRole('table');  

  expect(carDetailTable).toBeInTheDocument();

});