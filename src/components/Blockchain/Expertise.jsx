import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import { Card } from '../Metaverse/Features/Card'
import {
	dataCardExpertiseNFT,
	textOutExpertiseNFT,
	titleOutExpertiseNFT,
} from '../Util/dataBlockchainPage'

export const Expertise = () => {
	return (
		<section className={styles.section__expertise}>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain
					title={titleOutExpertiseNFT}
					subTitle={textOutExpertiseNFT}
				/>
				<div className={styles.blockchain__cards_row}>
					{dataCardExpertiseNFT.map(card => (
						<Card
							key={card.id}
							title={card.title}
							text={card.text}
							image={card.image}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
