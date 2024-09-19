import styles from '../../../pages/Metaverse/metaverse.module.scss'

export const Card = ({ image, title, text }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.card__content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
