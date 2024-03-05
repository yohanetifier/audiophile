import React from 'react';
import styles from './Hero.module.scss';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';
import CenterWrapper from '../CenterWrapper/CenterWrapper';

const Hero = () => {
	return (
		<>
			<div className={styles.mainWrapper}>
				<CenterWrapper>
					<div className={styles.wrapper}>
						<DescriptionProduct
							teaser="new product"
							title="XX99 Mark II Headphones"
							description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
							label="see product"
						/>
					</div>
				</CenterWrapper>
			</div>
		</>
	);
};

export default Hero;
