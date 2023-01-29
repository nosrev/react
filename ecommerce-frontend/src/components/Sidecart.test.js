import {render, screen, fireEvent} from '@testing-library/react'
import renderer from 'react-test-renderer';
import Sidecart from './Sidecart';
import Header from './Header';
import { MemoryRouter as Router } from 'react-router-dom';

it('render Sidecart', () => {
  const component = renderer.create(
    <Sidecart />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("test callback function", async () => {
    const { container } = render(<Router><Header /></Router>)
    const element = screen.getByTestId('side-cart');
    fireEvent.click(await container.querySelector('.cart-btn'));
    expect(element.classList.contains('open')).toBe(true)

    fireEvent.click(await container.querySelector('.close-cart'));
    expect(element.classList.contains('open')).toBe(false)

    fireEvent.click(await container.querySelector('.cart-btn'));
    expect(element.classList.contains('open')).toBe(true)

    fireEvent.click(await container.querySelector('.cart-btn'));
    expect(element.classList.contains('open')).toBe(false)
});
