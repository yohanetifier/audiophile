import React from 'react';
import Image from 'next/image';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';
import CenterWrapper from '../CenterWrapper/CenterWrapper';
import styles from './TopProduct.module.scss';

interface Props {
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
	label: string;
}

const TopProduct = ({ imgSrc, imgAlt, title, description, label }: Props) => {
	return (
		<CenterWrapper>
			<div className={styles.background}>
				<div className={styles.bottomWrapper}>
					<div className={styles.img}>
						<Image
							src={imgSrc}
							alt={imgAlt}
							width={200}
							height={200}
						/>
					</div>
					<div className={styles.descriptionProduct}>
						<DescriptionProduct
							title={title}
							description={description}
							label={label}
						/>
					</div>
				</div>
			</div>
		</CenterWrapper>
	);
};

export default TopProduct;
