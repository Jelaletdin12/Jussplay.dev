import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import { Card } from '../Metaverse/Features/Card'
import {
	dataKeyForFeaturesServices,
	subTitleKeyForFeaturesServices,
	titleKeyForFeaturesServices,
} from '../Util/dataBlockchainPage'

export const FeaturesBest = () => {
	return (
		<section className={styles.section__features_best}>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain
					title={titleKeyForFeaturesServices}
					subTitle={subTitleKeyForFeaturesServices}
				/>
				<div className={styles.blockchain__cards_row}>
					{dataKeyForFeaturesServices.map(card => (
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
