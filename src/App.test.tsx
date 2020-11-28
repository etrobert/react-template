import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('App displays Hello World!', () => {
  render(<App />);
  expect(screen.queryByText('Hello World!')).not.toBeNull();
});
