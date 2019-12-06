import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   // const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("App renders without crashing", () => {
  render(<App/>)
})

test("Dashboard renders without crashing", () => {
  render(<Dashboard/>)
})

test("Display renders without crashing", () => {
  render(<Display/>)
})