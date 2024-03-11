import React from 'react';
import styles from './ActionWithIcon.module.scss';
interface Props {
	label: string;
	icon: React.ReactNode;
}

const ActionWithIcon = ({ label, icon }: Props) => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.action}>{label}</p>
			{icon}
		</div>
	);
};

export default ActionWithIcon;
