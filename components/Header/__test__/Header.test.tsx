import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
	it('should render a header with a class', () => {
		render(<Header />);
		const header = screen.getByTestId('header');
		expect(header).toBeInTheDocument();
		expect(header).toHaveClass('mainWrapper');
	});
	it('should render a div with a svg', () => {
		render(<Header />);
		const div = screen.getByTestId('wrapperLogo');
		const logoElement = div.querySelector('svg');
		expect(div).toBeInTheDocument();
		expect(logoElement).toBeInTheDocument();
	});
	it('should render 4 route', () => {
		render(<Header />);
		const wrapperRoute = screen.getByTestId('wrapperRoute');
		const route = wrapperRoute.querySelectorAll('a');
		expect(route.length).toBe(4);
	});
	it('should have div with a cart', () => {
		const { getByTestId } = render(<Header />);
		const wrapperSvgCart = getByTestId('wrapperSvgCart');
		const svg = wrapperSvgCart.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});
});
