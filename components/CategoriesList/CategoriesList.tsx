import React from 'react';
import Categorie from '../Categorie/Categorie';
import CenterWrapper from '../CenterWrapper/CenterWrapper';
import styles from './CategoriesList.module.scss';
import { Categories } from '@/typings/categories';

interface Props {
	categorie: Categories[];
}

const CategoriesList = ({ categorie }: Props) => {
	return (
		<CenterWrapper>
			<div className={styles.mainWrapper}>
				{categorie.map(({ categorie, imgSrc, imgAlt }, index) => (
					<Categorie
						key={index}
						categorie={categorie}
						imageSrc={imgSrc}
						imageAlt={imgAlt}
					/>
				))}
			</div>
		</CenterWrapper>
	);
};

export default CategoriesList;
