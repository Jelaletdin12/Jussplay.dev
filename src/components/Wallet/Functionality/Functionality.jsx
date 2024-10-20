// Components
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
import {
	cardsFunctionality,
	subTitleFunctionality,
	titleFunctionality,
} from '../../Util/Wallet/dataWallet'

export const Functionality = () => {
	return (
		<section className={walletStyle.wallet__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleFunctionality}
					subTitle={subTitleFunctionality}
				/>
				<div className={walletStyle.functionality__row}>
					{cardsFunctionality.map(card => (
						<div key={card.id} className={walletStyle.functionality__card}>
							<img src={card.image} alt={card.title} />
							<h1>{card.title}</h1>
							<p>{card.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
