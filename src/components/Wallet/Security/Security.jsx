import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
import { Card } from '../../Metaverse/Features/Card'
import {
	cardsSecurityFeatures,
	subTitleSecurityFeatures,
	titleSecurityFeatures,
} from '../../Util/Wallet/dataWallet'

export const Security = () => {
	return (
		<section className={walletStyle.wallet__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleSecurityFeatures}
					subTitle={subTitleSecurityFeatures}
				/>
				<div className={blockchainStyle.blockchain__cards_row}>
					{cardsSecurityFeatures.map(card => (
						<Card
							key={card.id}
							image={card.image}
							title={card.title}
							text={card.text}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
