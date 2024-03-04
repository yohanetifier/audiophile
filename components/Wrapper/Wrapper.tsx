import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default Wrapper;
