import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
import {
	cardsWalletService,
	platformListWalletService,
	platformTitleWalletService,
	subTitleWalletService,
	titleWalletService,
} from '../../Util/Wallet/dataWallet'
import { PlatformWallet } from '../ui/PlatformWallet'

export const WalletService = () => {
	return (
		<section className={walletStyle.wallet__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleWalletService}
					subTitle={subTitleWalletService}
				/>
				<div className={walletStyle.wallet__service__row}>
					{cardsWalletService.map(card => (
						<div key={card.id} className={walletStyle.wallet__service__card}>
							<img src={card.image} alt={card.title} />
							<div className={walletStyle.wallet__service__card_content}>
								<h1>{card.title}</h1>
								<p>{card.text}</p>
							</div>
						</div>
					))}
				</div>
				<PlatformWallet title={platformTitleWalletService}>
					<ul className={walletStyle.wallet__service_list}>
						<li>{platformListWalletService}</li>
					</ul>
				</PlatformWallet>
			</div>
		</section>
	)
}
