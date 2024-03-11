import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DescriptionProduct from './DescriptionProduct';

const props = {
	teaser: 'New Product',
	title: 'Bose',
	description: 'Great experience with this product',
	label: 'see more'
};

describe('DescriptionProduct', () => {
	it('should render a div parentElement', () => {
		const { getByTestId } = render(<DescriptionProduct {...props} />);
		const mainWrapper = getByTestId('wrapper');
		expect(mainWrapper).toBeInTheDocument();
	});
	it('should render  the teaser', () => {
		const { getByTestId } = render(<DescriptionProduct {...props} />);
		const mainWrapper = getByTestId('wrapper');
		const teaser = mainWrapper.firstChild;
		expect(teaser).toBeInTheDocument();
		expect(teaser?.textContent).toBe('New Product');
	});
	it('should render  the title', () => {
		const { getByTestId } = render(<DescriptionProduct {...props} />);
		const mainWrapper = getByTestId('wrapper');
		const title = mainWrapper.querySelector('h2');
		expect(title).toBeInTheDocument();
		expect(title!.textContent).toBe('Bose');
	});
	it('should render a description', () => {
		const { getByTestId } = render(<DescriptionProduct {...props} />);
		const mainWrapper = getByTestId('wrapper');
		const description = mainWrapper.querySelector('p:nth-child(3)');
		expect(description).toBeInTheDocument();
	});
	it('should render a button', () => {
		const { getByText } = render(<DescriptionProduct {...props} />);
		const button = getByText('see more');
		expect(button).toBeInTheDocument();
	});
});
