import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

test('renders Header', () => {
  global.scrollTo = jest.fn()
  render(<Router><App /></Router>);
    const testRenderer = TestRenderer.create(
        <Router>
            <App />
        </Router>
    );
    const testInstance = testRenderer.root;
    testInstance.findByType(Header);
});
