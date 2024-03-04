import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.mainWrapper}>
			<Header />
			<Hero />
		</main>
	);
}
