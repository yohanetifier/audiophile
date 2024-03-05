import React from 'react';
import Categorie from '../Categorie/Categorie';
import CenterWrapper from '../CenterWrapper/CenterWrapper';
import styles from './CategoriesList.module.scss';
interface Props {
	categorie: [];
}

const CategoriesList = ({ categorie }: Props) => {
	return (
		<CenterWrapper>
			<div className={styles.mainWrapper}>
				{categorie.map(({ categorie, imageSrc, imageAlt }, index) => (
					<Categorie
						key={index}
						categorie={categorie}
						imageSrc={imageSrc}
						imageAlt={imageAlt}
					/>
				))}
			</div>
		</CenterWrapper>
	);
};

export default CategoriesList;
