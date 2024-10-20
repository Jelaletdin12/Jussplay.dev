import styles from './walletUi.module.scss'
export const WalletCard = ({ title, text }) => {
	return (
		<div className={styles.wallet__card_ui}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
