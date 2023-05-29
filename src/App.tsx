import styles from './App.module.scss';
import { Button, Card } from './components';
import LinksForm from './components/LinksForm/LinksForm';
import { withLayout } from './layout/Layout';

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Card className={styles.card} color='blue'>
				<LinksForm />
				<div className={styles.buttons}>
					<Button appearance='ghost'>Пред просмотр</Button>
					<Button appearance='ghost'>Скачать документ</Button>
				</div>
			</Card>
		</div>
	);
};

export default withLayout(App);
