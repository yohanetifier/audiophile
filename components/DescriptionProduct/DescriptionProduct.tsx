import React from 'react';
import Button from '../Button/Button';
import styles from './DescriptionProduct.module.scss';
interface Props {
	teaser?: string;
	title: string;
	description: string;
	label: string;
}

const DescriptionProduct = ({ teaser, title, description, label }: Props) => {
	return (
		<div data-testid="wrapper" className={styles.mainWrapper}>
			{teaser && <p>{teaser}</p>}
			<h2>{title}</h2>
			<p>{description}</p>
			<Button label={label} href="/" />
		</div>
	);
};

export default DescriptionProduct;
