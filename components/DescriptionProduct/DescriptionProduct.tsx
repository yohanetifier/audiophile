import React from 'react';
import Button from '../Button/Button';

interface Props {
	teaser: string;
	title: string;
	description: string;
	label: string;
}

const DescriptionProduct = ({ teaser, title, description, label }: Props) => {
	return (
		<div>
			<p>{teaser}</p>
			<h2>{title}</h2>
			<p>{description}</p>
			<Button label={label} href="/" />
		</div>
	);
};

export default DescriptionProduct;
