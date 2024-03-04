import Link from 'next/link';
import React from 'react';
import styles from './Button.module.scss';

interface Props {
	label: string;
	href: string;
}

const Button = ({ label, href }: Props) => {
	return (
		<Link className={styles.link} href={href}>
			{label}
		</Link>
	);
};

export default Button;
