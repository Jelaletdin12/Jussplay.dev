/* eslint-disable react/prop-types */
import platformImage from '../../../assets/web3/img/platform.png'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'
import styles from './walletUi.module.scss'

export const PlatformWallet = ({ children, title }) => {
	return (
		<div className={styles.platform__wallet_box}>
			<div className={styles.platform__wallet_row}>
				<div className={styles.platform__wallet_item}>
					<img src={platformImage} alt={title} />
				</div>
				<div className={styles.platform__wallet_item}>
					<div className={styles.platform__wallet_item__body}>
						<h1>{title}</h1>
						{children}
					</div>
					<BtnBlockchain />
				</div>
			</div>
		</div>
	)
}
