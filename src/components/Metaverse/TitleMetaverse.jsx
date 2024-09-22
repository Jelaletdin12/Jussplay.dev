import styles from '../../pages/Metaverse/metaverse.module.scss'

export const TitleMetaverse = ({ title, subTitle }) => {
	return (
		<div className={styles.title__metaverse}>
			<h1>{title}</h1>
			<p>{subTitle}</p>
		</div>
	)
}
