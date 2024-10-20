import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
import {
	cardsBodyBlockchainProductLeft,
	cardsBodyBlockchainProductRight,
	cardsTopBlockchainProduct,
	subTitleBodyBlockchainProduct,
	subTitleTopBlockchainProduct,
	titleBodyBlockchainProduct,
	titleTopBlockchainProduct,
} from '../../Util/Wallet/dataWallet'
import { WalletCard } from '../ui/WalletCard'
import styles from './bp.module.scss'
import { CardBP } from './CardBP'

export const BlockchainProduct = () => {
	return (
		<section className={walletStyle.wallet__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.bp__top}>
					<TitleBlockchain
						title={titleTopBlockchainProduct}
						subTitle={subTitleTopBlockchainProduct}
					/>
					<div className={styles.bp__top_row}>
						{cardsTopBlockchainProduct.map(card => (
							<CardBP
								key={card.id}
								image={card.image}
								title={card.title}
								text={card.text}
							/>
						))}
					</div>
				</div>
				<div className={styles.bp__body_row}>
					<div className={styles.bp__body_title}>
						<h1>{titleBodyBlockchainProduct}</h1>
						<p>{subTitleBodyBlockchainProduct}</p>
					</div>
					<div className={styles.bp__body_row__cards}>
						<div className={styles.bp__body_row__item}>
							{cardsBodyBlockchainProductLeft.map(card => (
								<WalletCard key={card.id} title={card.title} text={card.text} />
							))}
						</div>
						<div className={styles.bp__body_row__item}>
							{cardsBodyBlockchainProductRight.map(card => (
								<WalletCard key={card.id} title={card.title} text={card.text} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
