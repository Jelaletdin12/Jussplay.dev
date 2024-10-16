import styles from '../../../pages/Web3/web3.module.scss'

export const ProcessCard = ({ image, title, text }) => {
	return (
		<div className={styles.process__card}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
