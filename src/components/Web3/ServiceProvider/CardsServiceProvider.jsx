import styles from '../../../pages/Web3/web3.module.scss'

export const CardsServiceProvider = ({ image, title, text }) => {
	return (
		<div className={styles.card__web3}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
