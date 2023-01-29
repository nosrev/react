import renderer from 'react-test-renderer';
import LeftColumn from './LeftColumn';
import { MemoryRouter as Router } from 'react-router-dom';

it('render LeftColumn', () => {
  const component = renderer.create(
    <Router>
        <LeftColumn />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
