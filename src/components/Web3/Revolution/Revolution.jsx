import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { Card } from '../../Metaverse/Features/Card'
import {
	cardsVirtualRevolution,
	subtitleVirtualRevolution,
	titleVirtualRevolution,
} from '../../Util/Web3/dataWeb3'

export const Revolution = () => {
	return (
		<section className={styles.section__revolution}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleVirtualRevolution}
					subTitle={subtitleVirtualRevolution}
				/>
				<div className={blockchainStyle.blockchain__cards_row}>
					{cardsVirtualRevolution.map(card => (
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
