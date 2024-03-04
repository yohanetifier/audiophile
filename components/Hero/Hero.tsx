import React from 'react';
import styles from './Hero.module.scss';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.leftWrapper}>
				<DescriptionProduct
					teaser="new product"
					title="XX99 Mark II Headphones"
					description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
					label="see product"
				/>
			</div>
			<div className={styles.rightWrapper}>
				<Image src={''} alt={''} />
			</div>
		</div>
	);
};

export default Hero;
