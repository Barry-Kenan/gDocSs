import cn from 'classnames';
import { FC, KeyboardEvent } from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';

const Modal: FC<ModalProps> = ({
	active,
	setActive,
	previewUrl,
	className,
	...props
}) => {
	const closeModal = (key: KeyboardEvent) => {
		if (key.code == 'Escape') {
			key.preventDefault();
			setActive(false);
		}
	};

	return (
		<div
			className={cn(styles.modal, className, {
				[styles.active]: active
			})}
			tabIndex={0}
			onClick={() => setActive(false)}
			onKeyDown={(key: KeyboardEvent) => closeModal(key)}
			{...props}
		>
			<div
				className={cn(styles.modalContent, {
					[styles.active]: active
				})}
				onClick={e => e.stopPropagation()}
			>
				{previewUrl && (
					<iframe
						sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
						src={previewUrl}
						width='100%'
						height='100%'
						loading='lazy'
					></iframe>
				)}
			</div>
		</div>
	);
};

export default Modal;
