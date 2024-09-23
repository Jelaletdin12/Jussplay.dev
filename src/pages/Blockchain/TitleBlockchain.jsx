/* eslint-disable react/prop-types */
import styles from './blockchain.module.scss'

export const TitleBlockchain = ({ title, subTitle }) => {
	return (
		<div className={styles.title__blockchain}>
			<h1>{title}</h1>
			<p>{subTitle}</p>
		</div>
	)
}
