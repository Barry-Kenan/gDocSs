import cn from 'classnames';
import { ForwardedRef, forwardRef, memo } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';

const Input = memo(
	forwardRef(
		(
			{ className, error, ...props }: InputProps,
			ref: ForwardedRef<HTMLInputElement>
		): JSX.Element => {
			return (
				<div className={cn(styles.inputWrapper, className)}>
					<input
						className={cn(styles.input, {
							[styles.error]: error
						})}
						ref={ref}
						{...props}
					/>
					{error && (
						<span role='alert' className={styles.errorMessage}>
							{error.message}
						</span>
					)}
				</div>
			);
		}
	)
);

export default Input;
