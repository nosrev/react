import renderer from 'react-test-renderer';
import Catalog from './Catalog';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Catalog', () => {
  global.scrollTo = jest.fn()
  const component = renderer.create(
    <Router>
        <Catalog />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
