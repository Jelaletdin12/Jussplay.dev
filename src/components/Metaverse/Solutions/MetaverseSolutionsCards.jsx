import styles from '../../../pages/Metaverse/metaverse.module.scss'

export const MetaverseSolutionsCards = ({ image, title, text }) => {
	return (
		<div className={styles.cardSolution}>
			<img src={image} alt={title} />
			<div className={styles.item__card}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
