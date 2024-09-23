import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import { Card } from '../Metaverse/Features/Card'
import { dataCountedCard, titleCounted } from '../Util/dataBlockchainPage'

export const Counted = () => {
	return (
		<section className={styles.section__counted}>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain title={titleCounted} />
				<div className={styles.blockchain__cards_row}>
					{dataCountedCard.map(card => (
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
