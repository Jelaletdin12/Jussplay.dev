import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { cardsAgency, titleAgency } from '../../Util/Web3/dataWeb3'
import { AgencyCard } from './AgencyCard'

export const Agency = () => {
	return (
		<section className={styles.agency__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleAgency} />
				<div className={styles.agency__row}>
					{cardsAgency.map(card => (
						<AgencyCard key={card.id} image={card.image} />
					))}
				</div>
			</div>
		</section>
	)
}
