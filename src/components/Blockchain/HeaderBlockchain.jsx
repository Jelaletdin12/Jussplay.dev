/* eslint-disable react/prop-types */
import styles from '../../pages/Blockchain/blockchain.module.scss'
import { Form } from './Form'
import { Title } from './Title'

export const HeaderBlockchain = ({ title, subtitle, spanText }) => {
	return (
		<div className={styles.headerBlockchain}>
			<div className={styles.blockchainContainer}>
				<div className={styles.headerBlockchainRow}>
					<Title title={title} subTitle={subtitle} spanText={spanText} />
					<Form />
				</div>
			</div>
		</div>
	)
}
