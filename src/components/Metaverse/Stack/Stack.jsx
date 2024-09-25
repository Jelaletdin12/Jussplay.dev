import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Metaverse/metaverse.module.scss'
import {
	cardsStack,
	subTitleStack,
	titleStack,
} from '../../Util/contentMetaverse'
import { CardStack } from './CardStack'

export const Stack = () => {
	return (
		<section className={styles.section__stack}>
			<div className={styles.metaverseContainer}>
				<TitleBlockchain title={titleStack} subTitle={subTitleStack} />
				<div className={styles.stack__row}>
					{cardsStack.map(card => (
						<CardStack key={card.id} title={card.title} image={card.image} />
					))}
				</div>
			</div>
		</section>
	)
}
