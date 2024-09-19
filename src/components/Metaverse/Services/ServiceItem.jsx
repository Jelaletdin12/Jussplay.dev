import styles from '../../../pages/Metaverse/metaverse.module.scss'

export const ServiceItem = ({ image, title, text, style }) => {
	return (
		<div className={styles.itemService}>
			<div className={styles.item__image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.itemContent} style={style}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
