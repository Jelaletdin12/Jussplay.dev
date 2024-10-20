import styles from './aboutWallet.module.scss'

export const CardAboutWallet = ({ image, title, text }) => {
	return (
		<div className={styles.card__about_wallet}>
			<img src={image} alt={title} />
			<div className={styles.card__about_wallet__content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
