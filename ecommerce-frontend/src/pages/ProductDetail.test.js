import renderer from 'react-test-renderer';
import ProductDetail from './ProductDetail';
import { MemoryRouter as Router } from 'react-router-dom';

it('render ProductDetail', () => {
  global.scrollTo = jest.fn()
  const component = renderer.create(
    <Router>
        <ProductDetail />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
