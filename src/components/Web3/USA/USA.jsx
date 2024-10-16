import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { cardsUSA, subtitleUSA, titleUSA } from '../../Util/Web3/dataWeb3'
import { USACard } from './USACard'

export const USA = () => {
	return (
		<section className={styles.usa__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleUSA} subTitle={subtitleUSA} />
				<div className={styles.usa__row}>
					{cardsUSA.map(card => (
						<USACard
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
