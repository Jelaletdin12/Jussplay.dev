import walletStyle from '../../../pages/Wallet/wallet.module.scss'

export const CardCryptocurrency = ({ image, title, text }) => {
	return (
		<div className={walletStyle.cryptocurrency__row_card}>
			<img src={image} alt={title} />
			<div className={walletStyle.cryptocurrency__row_card__content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
