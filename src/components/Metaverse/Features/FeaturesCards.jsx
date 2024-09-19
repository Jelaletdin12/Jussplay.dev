import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { cardsFeatures } from '../../Util/contentMetaverse'
import { Card } from './Card'

export const FeaturesCards = () => {
	return (
		<div className={styles.featuresCards}>
			{cardsFeatures.map(card => (
				<Card
					key={card.id}
					image={card.image}
					title={card.title}
					text={card.text}
				/>
			))}
		</div>
	)
}
