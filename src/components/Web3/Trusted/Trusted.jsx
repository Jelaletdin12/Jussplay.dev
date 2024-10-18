import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import {
	cardsTrusted,
	subtitleTrusted,
	titleTrusted,
} from '../../Util/Web3/dataWeb3'
import { TrustedCard } from './TrustedCard'

export const Trusted = () => {
	return (
		<section className={styles.trusted__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleTrusted} subTitle={subtitleTrusted} />
				<div className={styles.trusted__row}>
					{cardsTrusted.map(card => (
						<TrustedCard
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
