import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.scss';
import CategoriesList from '@/components/CategoriesList/CategoriesList';
import { Categories } from '@/typings/categories';
import TopProduct from '@/components/TopProduct/TopProduct';
import MiddleCard from '@/components/MiddleCard/MiddleCard';
import CenterWrapper from '@/components/CenterWrapper/CenterWrapper';

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
			<TopProduct
				imgSrc="/images/image-speaker-zx9.png"
				imgAlt="speaker"
				title="zx9 speaker"
				description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
				label="see product"
			/>
			<CenterWrapper>
				<div className={styles.middleCard}>
					<MiddleCard
						title="zx7 speaker"
						label="see product"
						imgSrc="/images/image-speaker-zx7.jpg"
						imgAlt="zx7 speaker"
						href=""
					/>
				</div>
			</CenterWrapper>
		</main>
	);
}
