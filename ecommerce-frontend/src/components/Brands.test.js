import renderer from 'react-test-renderer';
import Brands from './Brands';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Brands', () => {
  const component = renderer.create(
    <Brands />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
