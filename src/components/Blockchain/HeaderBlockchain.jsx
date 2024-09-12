import styles from '../../pages/Blockchain/blockchain.module.scss'
import { Form } from './Form'
import { Title } from './Title'

export const HeaderBlockchain = () => {
	return (
		<div className={styles.headerBlockchain}>
			<div className={styles.blockchainContainer}>
				<div className={styles.headerBlockchainRow}>
					<Title />
					<Form />
				</div>
			</div>
		</div>
	)
}
