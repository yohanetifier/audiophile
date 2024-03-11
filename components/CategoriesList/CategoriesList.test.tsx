import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CategoriesList from './CategoriesList';
import { Categories } from '@/typings/categories';

const categorie: Categories[] = [
	{
		categorie: 'headphones',
		imgSrc: '/images/image-category-thumbnail-headphones.png',
		imgAlt: 'headphones'
	},
	{
		categorie: 'speakers',
		imgSrc: '/images/image-category-thumbnail-speakers.png',
		imgAlt: ''
	},
	{
		categorie: 'earphones',
		imgSrc: '/images/image-category-thumbnail-earphones.png',
		imgAlt: ''
	}
];

describe('CategoriesLists', () => {
	it('should render 3 categories', () => {
		render(<CategoriesList categorie={categorie} />);
		const img = screen.getAllByRole('img');
		const title = screen.getAllByRole('heading');
		const link = document.querySelectorAll('h2');
		expect(img).toHaveLength(3);
		expect(title).toHaveLength(3);
		expect(link).toHaveLength(3);
	});
	it('should have the categorie headphones', () => {
		render(<CategoriesList categorie={categorie} />);
		const headphones = screen.getByText('headphones');
		expect(headphones).toBeInTheDocument();
	});
	it('should have the categorie speakers', () => {
		render(<CategoriesList categorie={categorie} />);
		const speakers = screen.getByText('speakers');
		expect(speakers).toBeInTheDocument();
	});
	it('should have the categorie earphones', () => {
		render(<CategoriesList categorie={categorie} />);
		const earphones = screen.getByText('earphones');
		expect(earphones).toBeInTheDocument();
	});
});
