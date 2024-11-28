/* eslint-disable react/prop-types */
import platformImage from '../../../assets/web3/img/platform.png'
import styles from '../../../pages/ServiceIOS/ios.module.scss'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'

export const PlatformNewYork = ({ children, title }) => {
	return (
		<div className={styles.platform__ios_box}>
			<div className={styles.platform__ios_row}>
				<div className={styles.platform__ios_item}>
					<img src={platformImage} alt={title} />
				</div>
				<div className={styles.platform__ios_item}>
					<div className={styles.platform__ios_item__body}>
						<h1>{title}</h1>
						{children}
					</div>
					<div className={styles.platform__ios_btn__mobile}>
						<BtnBlockchain />
					</div>
				</div>
			</div>
		</div>
	)
}
