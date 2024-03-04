import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CustomLink from './CustomLink';

const props = {
	label: 'exemple',
	href: 'exemple'
};

describe('CustomLink', () => {
	it('should render correctly a link', () => {
		const { getByTestId } = render(
			<CustomLink label={props.label} href={props.href} />
		);
		const link = getByTestId('link');
		expect(link).toHaveAttribute('class', 'link');
		expect(link).toHaveAttribute('href', 'exemple');
		expect(link.textContent).toBe('exemple');
	});
});
