import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			Google Docs Sheets
		</header>
	);
};

export default Header;
