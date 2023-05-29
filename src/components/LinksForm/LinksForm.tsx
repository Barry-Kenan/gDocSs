import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '..';
import { ILinksForm } from '../../interfaces/LinksForm.interface';
import styles from './LinksForm.module.scss';
import { LinksFormProps } from './LinksForm.props';

const LinksForm: FC<LinksFormProps> = ({ className, ...props }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors
	} = useForm<ILinksForm>();

	const onSubmit = (formData: ILinksForm) => {
		console.log(formData);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={className} {...props}>
			<div className={cn(styles.linksForm)}>
				<Input
					{...register('sheetLink', {
						required: {
							value: true,
							message: 'Укажите ссылку на таблицу с данными'
						}
					})}
					placeholder='Ссылка на таблицу с данными'
					error={errors.sheetLink}
					aria-invalid={errors.sheetLink ? true : false}
				/>
				<Input
					{...register('docLink', {
						required: { value: true, message: 'Укажите ссылку на шаблон' }
					})}
					placeholder='Ссылка на шаблон'
					error={errors.docLink}
					aria-invalid={errors.docLink ? true : false}
				/>
				<Button
					appearance='primary'
					type='submit'
					onClick={() => clearErrors()}
				>
					Отправить
				</Button>
			</div>
		</form>
	);
};

export default LinksForm;
