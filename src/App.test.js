// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ServerBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ServerBlaze/i);
    expect(titleElement).toBeInTheDocument();
});
