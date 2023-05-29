import cn from 'classnames';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<span>Barry Kenan</span>
		</footer>
	);
};

export default Footer;
