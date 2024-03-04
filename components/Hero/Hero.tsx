import React from 'react';
import styles from './Hero.module.scss';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';

const Hero = () => {
	return (
		<div className={styles.mainWrapper}>
			<DescriptionProduct
				teaser="new product"
				title="XX99 Mark II Headphones"
				description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
				label="see product"
			/>
		</div>
	);
};

export default Hero;
