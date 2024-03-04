import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import Cart from '../Cart/Cart';

const Header = () => {
	const navigation = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Headphones',
			href: '/headphones'
		},
		{
			title: 'speakers',
			href: '/speakers'
		},
		{
			title: 'earphones',
			href: '/earphones'
		}
	];
	return (
		<header data-testid="header" className={styles.mainWrapper}>
			<div data-testid="wrapperLogo">
				<Logo />
			</div>
			<div data-testid="wrapperRoute" className={styles.route}>
				{navigation.map(({ title, href }, index) => (
					<CustomLink key={index} label={title} href={href} />
				))}
			</div>
			<div data-testid="wrapperSvgCart">
				<Cart />
			</div>
		</header>
	);
};

export default Header;
