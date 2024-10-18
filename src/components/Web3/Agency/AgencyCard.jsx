import styles from '../../../pages/Web3/web3.module.scss'

export const AgencyCard = ({ image }) => {
	return (
		<div className={styles.agency__card}>
			<img src={image} alt={image} />
		</div>
	)
}
