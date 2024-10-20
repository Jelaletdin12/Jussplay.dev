import cryptoApp from '../../../assets/wallet/img/aboutWallet/crypto.png'
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
import { cardsAboutCrypto } from '../../Util/Wallet/dataWallet'
import styles from './aboutWallet.module.scss'
import { CardAboutWallet } from './CardAboutWallet'

export const AboutWallet = () => {
	return (
		<section className={walletStyle.about__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.about__row}>
					<div className={styles.about__item}>
						<img src={cryptoApp} alt='app' />
					</div>
					<div className={styles.about__item}>
						{cardsAboutCrypto.map(card => (
							<CardAboutWallet
								key={card.id}
								image={card.image}
								title={card.title}
								text={card.text}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
