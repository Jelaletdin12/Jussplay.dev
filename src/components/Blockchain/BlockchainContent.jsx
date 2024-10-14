import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import {
	subTitleGamingWorld,
	titleGamingWorld,
} from '../Util/dataBlockchainPage'
import { SectionContent } from './SectionContent'

export const BlockchainContent = () => {
	return (
		<section className={styles.sectionContent} id='#startJourney'>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain
					title={titleGamingWorld}
					subTitle={subTitleGamingWorld}
				/>
				<SectionContent />
			</div>
		</section>
	)
}
