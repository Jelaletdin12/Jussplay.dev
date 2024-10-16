import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import {
	cardsServiceProvider,
	titleServiceProvider,
} from '../../Util/Web3/dataWeb3'
import { CardsServiceProvider } from './CardsServiceProvider'

export const ServiceProvider = () => {
	return (
		<section className={styles.section__service_provider}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleServiceProvider} />
				<div className={styles.cards__web3_row}>
					{cardsServiceProvider.map(card => (
						<CardsServiceProvider
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
