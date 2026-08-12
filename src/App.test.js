// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewClient title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewClient/i);
    expect(titleElement).toBeInTheDocument();
});
