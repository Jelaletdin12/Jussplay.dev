import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import { Card } from '../Metaverse/Features/Card'
import {
	dataRewardingDigitalSolutions,
	subTitleRewardingDigitalSolutions,
	titleRewardingDigitalSolutions,
} from '../Util/dataBlockchainPage'

export const Rewarding = () => {
	return (
		<section className={styles.section__rewarding}>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain
					title={titleRewardingDigitalSolutions}
					subTitle={subTitleRewardingDigitalSolutions}
				/>
				<div className={styles.blockchain__cards_row}>
					{dataRewardingDigitalSolutions.map(card => (
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
