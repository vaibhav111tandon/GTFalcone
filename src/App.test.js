import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

test('renders Finding Falcone heading', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Finding Falcone/i);
  expect(linkElement).toBeInTheDocument();
});

test('render submit button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find Falcone/i);
  expect(linkElement).toBeInTheDocument();
});

test('render reset button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reset/i);
  expect(linkElement).toBeInTheDocument();
});

test('render Geektrust button', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Geektrust/i);
  expect(linkElement).toBeInTheDocument();
});

test('render Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/geektrust/i);
  expect(linkElement).toBeInTheDocument();
});

