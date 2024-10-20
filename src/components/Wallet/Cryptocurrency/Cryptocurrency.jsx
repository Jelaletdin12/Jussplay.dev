import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'

import {
	cardsCryptocurrency,
	listPlatformCryptocurrency,
	subTitleCryptocurrency,
	titleCryptocurrency,
	titlePlatformCryptocurrency,
} from '../../Util/Wallet/dataWallet'
import { PlatformWallet } from '../ui/PlatformWallet'
import { CardCryptocurrency } from './CardCryptocurrency'

export const Cryptocurrency = () => {
	return (
		<section className={walletStyle.wallet__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleCryptocurrency}
					subTitle={subTitleCryptocurrency}
				/>
				<div className={walletStyle.cryptocurrency__row}>
					{cardsCryptocurrency.map(card => (
						<CardCryptocurrency
							key={card.id}
							image={card.image}
							title={card.title}
							text={card.text}
						/>
					))}
				</div>
				<PlatformWallet title={titlePlatformCryptocurrency}>
					<ul className={walletStyle.cryptocurrency__list}>
						{listPlatformCryptocurrency.map(listItem => (
							<li key={listItem.id}>{listItem.list}</li>
						))}
					</ul>
				</PlatformWallet>
			</div>
		</section>
	)
}
