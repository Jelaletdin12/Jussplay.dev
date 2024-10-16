import styles from '../../../pages/Web3/web3.module.scss'

export const USACard = ({ image, title, text }) => {
	return (
		<div className={styles.usa__card}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
