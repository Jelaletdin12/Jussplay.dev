import styles from '../../../pages/Web3/web3.module.scss'

export const TrustedCard = ({ image, title, text }) => {
	return (
		<div className={styles.trusted__card}>
			<img src={image} alt={title} />
			<div className={styles.trusted__card__content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
