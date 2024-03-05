import React from 'react';
import Image from 'next/image';

interface Props {
	categorie: string;
	imageSrc: string;
	imageAlt: string;
}

const Categorie = ({ categorie, imageSrc, imageAlt }: Props) => {
	return (
		<div>
			<div>
				<Image src={imageSrc} alt={imageAlt} width={200} height={200} />
			</div>
			<h2>{categorie}</h2>
			<div>
				<p>shop</p>
			</div>
		</div>
	);
};

export default Categorie;
