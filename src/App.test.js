import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders pandemic', () => {
  render(<App />);
  const linkElement = screen.getByText(/pandemic/i);
  expect(linkElement).toBeInTheDocument();
});
