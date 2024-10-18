import styles from '../../../pages/Web3/web3.module.scss'

export const EngagementCard = ({ title, text }) => {
	return (
		<div className={styles.engagement__card}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
