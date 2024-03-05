import React from 'react';
import Image from 'next/image';
import styles from './Categorie.module.scss';
interface Props {
	categorie: string;
	imageSrc: string;
	imageAlt: string;
}

const Categorie = ({ categorie, imageSrc, imageAlt }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.mainWrapper}>
				<div className={styles.img}>
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={200}
						height={200}
					/>
				</div>
				<h2>{categorie}</h2>
				<p>shop</p>
			</div>
		</div>
	);
};

export default Categorie;
