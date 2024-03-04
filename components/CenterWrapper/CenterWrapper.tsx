import React from 'react';
import styles from './CenterWrapper.module.scss';

interface Props {
	children: React.ReactNode;
}

const CenterWrapper = ({ children }: Props) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default CenterWrapper;
