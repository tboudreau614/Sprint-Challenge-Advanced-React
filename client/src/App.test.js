import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';

afterEach(rtl.cleanup);

test('Render the app (this one is supposed to fail)', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/Men's World Cup/i)
  expect(element).toBeVisible()
})
test('Render count input (should also fail)', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(/Best US Players/i)
  expect(element).toBeVisible()
})
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});