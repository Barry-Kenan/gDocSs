import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.scss';
import { Button, Card } from './components';
import LinksForm from './components/LinksForm/LinksForm';
import Modal from './components/Modal/Modal';
import { useAppSelector } from './hooks/redux';
import { withLayout } from './layout/Layout';

const App = () => {
	const [modalActive, setModalActive] = useState<boolean>(false);
	const { status, error, downloadUrl, previewUrl } = useAppSelector(
		state => state.google
	);

	return (
		<div className={styles.wrapper}>
			<Card className={styles.card} color='blue'>
				<LinksForm />
				{status == 'loading' ? (
					<span className={cn(styles.info, styles.loading)}>Загрузка...</span>
				) : (
					<></>
				)}
				{error ? (
					<span className={cn(styles.info, styles.error)}>{error}</span>
				) : (
					<></>
				)}
				<div className={styles.buttons}>
					<Button
						appearance='ghost'
						onClick={() => setModalActive(true)}
						disabled={!previewUrl}
					>
						Предварительный просмотр
					</Button>
					<Button appearance='ghost' disabled={!downloadUrl}>
						<Link
							to={downloadUrl}
							className={cn(styles.link, {
								[styles.disabled]: downloadUrl == ''
							})}
						>
							Получить файл
						</Link>
					</Button>
				</div>
			</Card>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				previewUrl={previewUrl}
			/>
		</div>
	);
};

export default withLayout(App);
