import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'
import styles from './platformWeb.module.scss'

export const PlatformWeb3 = ({ image, title, text }) => {
	return (
		<section className={styles.platform__web}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.platform__web_box}>
					<div className={styles.platform__web_row}>
						<div className={styles.platform__web_item}>
							<img src={image} alt={title} />
						</div>
						<div className={styles.platform__web_item}>
							<h1>{title}</h1>
							<p>{text}</p>
							<BtnBlockchain />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
