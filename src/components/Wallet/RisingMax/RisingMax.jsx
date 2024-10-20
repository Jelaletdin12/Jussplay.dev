// Assets
import phone from '../../../assets/wallet/img/risingMax/phone.png'
// Components
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
// Utils
import {
	cardsBodyRisingMaxLeft,
	cardsBodyRisingMaxRight,
	cardsTopRisingMax,
	subTitleRisingMax,
	titleRisingMax,
} from '../../Util/Wallet/dataWallet'

export const RisingMax = () => {
	return (
		<section className={walletStyle.wallet__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleRisingMax} subTitle={subTitleRisingMax} />
				<div className={walletStyle.rising__top_row}>
					{cardsTopRisingMax.map(card => (
						<div key={card.id} className={walletStyle.rising__top_card}>
							<img src={card.image} alt={card.title} />
							<h1>{card.title}</h1>
						</div>
					))}
				</div>
				<div className={walletStyle.rising__body_row}>
					<div className={walletStyle.rising__body_item}>
						<img src={phone} alt='phone' />
					</div>
					<div className={walletStyle.rising__body_item}>
						<div className={walletStyle.rising__body_sub__items}>
							<div className={walletStyle.rising__body_sub__item}>
								{cardsBodyRisingMaxLeft.map(card => (
									<div key={card.id} className={walletStyle.rising__body_card}>
										<h1>{card.title}</h1>
										<p>{card.text}</p>
									</div>
								))}
							</div>
							<div className={walletStyle.rising__body_sub__item}>
								{cardsBodyRisingMaxRight.map(card => (
									<div key={card.id} className={walletStyle.rising__body_card}>
										<h1>{card.title}</h1>
										<p>{card.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
