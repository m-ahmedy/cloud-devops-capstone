import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to github repo', () => {
  render(<App />);
  const linkElement = screen.getByText(/capstone repo/i);
  expect(linkElement).toBeInTheDocument();
});
