import React from 'react';
import Categorie from '../Categorie/Categorie';
import CenterWrapper from '../CenterWrapper/CenterWrapper';

interface Props {
	categorie: [];
}

const CategoriesList = ({ categorie }: Props) => {
	return (
		<CenterWrapper>
			{categorie.map(({ element, imageSrc, imageAlt }, index) => (
				<Categorie
					key={index}
					categorie={element}
					imageSrc={imageSrc}
					imageAlt={imageAlt}
				/>
			))}
		</CenterWrapper>
	);
};

export default CategoriesList;
