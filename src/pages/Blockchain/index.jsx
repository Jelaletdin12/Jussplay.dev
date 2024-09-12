import transition from '../../pageTransition'
import styles from './blockchain.module.scss'

const Blockchain = () => {
	return (
		<div className={styles.page__blockchain}>
			<div>Blockchain</div>
		</div>
	)
}

export default transition(Blockchain)
