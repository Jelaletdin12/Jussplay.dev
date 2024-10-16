import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import {
	cardsEngagementModels,
	subtitleEngagementModels,
	titleEngagementModels,
} from '../../Util/Web3/dataWeb3'
import { EngagementCard } from './EngagementCard'

export const Engagement = () => {
	return (
		<section className={styles.engagement__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleEngagementModels}
					subTitle={subtitleEngagementModels}
				/>
				<div className={styles.engagement__row}>
					{cardsEngagementModels.map(card => (
						<EngagementCard key={card.id} title={card.title} text={card.text} />
					))}
				</div>
			</div>
		</section>
	)
}
