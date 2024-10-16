import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { cardsFirm, subTitleFirm, titleFirm } from '../../Util/Web3/dataWeb3'
import { FirmCard } from './FirmCard'

export const Firm = () => {
	return (
		<section className={styles.firm__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleFirm} subTitle={subTitleFirm} />
				<div className={styles.firm__row}>
					{cardsFirm.map(card => (
						<FirmCard
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
