import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import { titleNFT } from '../Util/dataBlockchainPage'
import { SectionContent } from './SectionContent'

export const BlockchainContent = () => {
	return (
		<section className={styles.sectionContent} id='#startJourney'>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain title={titleNFT} />
				<SectionContent />
			</div>
		</section>
	)
}
