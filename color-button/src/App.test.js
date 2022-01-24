import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  expect(button).toHaveStyle({backgroundColor: 'red'});

  //click on the button
  fireEvent.click(button);

  //expect the background color to be blue
  expect(button).toHaveStyle({backgroundColor: 'blue'});

  //expect the button text to be 'Change to red'
  expect(button.textContent).toBe('Change to red');

});