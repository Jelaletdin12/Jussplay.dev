import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import {
	cardsProcess,
	subtitleProcess,
	titleProcess,
} from '../../Util/Web3/dataWeb3'
import { ProcessCard } from './ProcessCard'

export const Process = () => {
	return (
		<section className={styles.process__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleProcess} subTitle={subtitleProcess} />
				<div className={styles.process__row}>
					{cardsProcess.map(card => (
						<ProcessCard
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
