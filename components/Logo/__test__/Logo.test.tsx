import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
	it('should render a svg', () => {
		const { getByTestId } = render(<Logo />);
		const logo = getByTestId('logo');
		expect(logo).toBeInTheDocument();
	});
});
