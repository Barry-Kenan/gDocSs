import cn from 'classnames';
import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
	appearance,
	children,
	className,
	...props
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
