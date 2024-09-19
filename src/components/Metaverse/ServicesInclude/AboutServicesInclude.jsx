/* eslint-disable react/prop-types */
import styles from '../../../pages/Metaverse/metaverse.module.scss'

export const AboutServicesInclude = ({ title, text }) => {
	return (
		<div className={styles.aboutServicesIncludeItem}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
