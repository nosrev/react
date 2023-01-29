import renderer from 'react-test-renderer';
import HomeSlider from './HomeSlider';

it('render HomeSlider', () => {
  const component = renderer.create(
    <HomeSlider />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
