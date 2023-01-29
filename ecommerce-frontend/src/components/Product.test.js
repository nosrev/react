import renderer from 'react-test-renderer';
import Product from './Product';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Product', () => {
  const component = renderer.create(
    <Router>
        <Product type="home" />,
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
