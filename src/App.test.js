import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render naveen", ()=>{
  render(<App/>);
  const element = screen.getByText("naveen");
  expect(element).toBeInTheDocument();
})

test("click event", async ()=>{
  render(<App/>);
  const buttonElement = screen.getByRole("button", {
    name : "increment"
  });
  
  expect(buttonElement).toBeInTheDocument();
  await userEvent.click(buttonElement);
  const countElement = screen.getByRole("heading");
  expect(countElement).toHaveTextContent("1")
})
