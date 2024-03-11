import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './Button';

const props = {
	label: 'see more',
	href: '/product'
};

describe('Button', () => {
	it('should have a link', () => {
		const { getByRole } = render(<Button {...props} />);
		const link = getByRole('link');
		expect(link).toBeInTheDocument();
		expect(link.textContent).toBe('see more');
		expect(link).toHaveAttribute('href');
		expect(link.getAttribute('href')).toBe('/product');
	});
});
