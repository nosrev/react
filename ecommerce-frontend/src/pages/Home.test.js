import renderer from 'react-test-renderer';
import Home from './Home';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Home', () => {
  global.scrollTo = jest.fn();
  const component = renderer.create(
    <Router>
        <Home />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
