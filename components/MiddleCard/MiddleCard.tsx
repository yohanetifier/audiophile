import React from 'react';
import Button from '../Button/Button';
import styles from './MiddleCard.module.scss';
import Image from 'next/image';

interface Props {
	title: string;
	label: string;
	href: string;
	imgSrc: string;
	imgAlt: string;
}

const MiddleCard = ({ label, href, title, imgSrc, imgAlt }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<h2>{title}</h2>
				<Button label={label} href={href} />
			</div>
			<div>
				<Image width={0} height={0} src={imgSrc} alt={imgAlt} />
			</div>
		</div>
	);
};

export default MiddleCard;
