import renderer from 'react-test-renderer';
import Footer from './Footer';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Footer', () => {
  const component = renderer.create(
    <Router>
        <Footer />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
