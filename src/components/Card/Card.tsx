import cn from 'classnames';
import { FC } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

const Card: FC<CardProps> = ({
	children,
	color = 'white',
	className,
	...props
}) => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color == 'blue'
			})}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;
