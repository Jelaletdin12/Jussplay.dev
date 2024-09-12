import styles from '../../pages/Blockchain/blockchain.module.scss'
import { SectionContent } from './SectionContent'

export const BlockchainContent = () => {
	return (
		<section className={styles.sectionContent} id='#startJourney'>
			<div className={styles.blockchainContainer}>
				<div className={styles.contentTitle}>
					<h1>
						Jussplay Developments your reliable P2E NFT Game development partner
					</h1>
				</div>
				<SectionContent />
			</div>
		</section>
	)
}
