import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.scss';
import CategoriesList from '@/components/CategoriesList/CategoriesList';
import { Categories } from '@/typings/categories';

export default function Home() {
	const categorie: Categories[] = [
		{
			categorie: 'Headphones',
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
	return (
		<main className={styles.mainWrapper}>
			<Header />
			<Hero />
			<CategoriesList categorie={categorie} />
		</main>
	);
}
