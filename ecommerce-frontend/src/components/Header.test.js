import renderer from 'react-test-renderer';
import Header from './Header';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Header', () => {
  const component = renderer.create(
    <Router>
        <Header />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
