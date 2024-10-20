import styles from './bp.module.scss'

export const CardBP = ({ image, title, text }) => {
	return (
		<div className={styles.bp__card}>
			<img src={image} alt={title} />
			<div className={styles.bp__card_content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
