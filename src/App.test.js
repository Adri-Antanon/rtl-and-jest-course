import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ backgroundColor: 'red' });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  expect(button.textContent).toBe('Change to red');
});

test('initial condition', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox funcionality', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
