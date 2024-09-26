/* eslint-disable react/prop-types */
import styles from '../../../pages/Metaverse/metaverse.module.scss'

export const CardStack = ({ title, image }) => {
	return (
		<div className={styles.stack__card}>
			<h1>{title}</h1>
			<div className={styles.stack__card_image}>
				<img src={image} alt={title} />
			</div>
		</div>
	)
}
