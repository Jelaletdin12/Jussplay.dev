import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { Card } from '../../Metaverse/Features/Card'
import {
	cardsTechStack,
	subTitleTechStack,
	titleTechStack,
} from '../../Util/Web3/dataWeb3'

export const TechStack = () => {
	return (
		<section className={styles.tech__stack_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleTechStack} subTitle={subTitleTechStack} />
				<div className={blockchainStyle.blockchain__cards_row}>
					{cardsTechStack.map(card => (
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
