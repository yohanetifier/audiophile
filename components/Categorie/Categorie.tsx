import React from 'react';
import Image from 'next/image';
import styles from './Categorie.module.scss';
import { MdArrowForwardIos } from 'react-icons/md';
import ActionWithIcon from '../ActionWithIcon/ActionWithIcon';
interface Props {
	categorie: string;
	imageSrc: string;
	imageAlt: string;
}

const Categorie = ({ categorie, imageSrc, imageAlt }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}>
				<Image src={imageSrc} alt={imageAlt} width={200} height={200} />
			</div>
			<div className={styles.details}>
				<h2 className={styles.categorie}>{categorie}</h2>
				{/* <div>
					<p className={styles.action}>shop</p>
					<MdArrowForwardIos />
				</div> */}
				<ActionWithIcon label="Shop" icon={<MdArrowForwardIos />} />
			</div>
		</div>
	);
};

export default Categorie;
