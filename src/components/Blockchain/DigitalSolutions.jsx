import person from '../../assets/blockchain/PopularNFTP2EGames/person.png'
import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import {
	dataRewardingDigitalSolutionsFooter,
	dataRewardingDigitalSolutionsFooterRight,
	titleRewardingDigitalSolutions,
} from '../Util/dataBlockchainPage'

export const DigitalSolutions = () => {
	return (
		<section className={styles.section__digital_solutions}>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain title={titleRewardingDigitalSolutions} />
				<div className={styles.digital_solutions__row}>
					<div className={styles.digital__col}>
						<img src={person} alt='person' />
					</div>
					<div className={styles.digital__col}>
						<div className={styles.digital__items_col}>
							{dataRewardingDigitalSolutionsFooter.map(item => (
								<div key={item.id} className={styles.digital__item}>
									<img src={item.icon} alt={item.title} />
									<h1>{item.title}</h1>
								</div>
							))}
						</div>
						<div className={styles.digital__items_col}>
							{dataRewardingDigitalSolutionsFooterRight.map(item => (
								<div key={item.id} className={styles.digital__item}>
									<img src={item.icon} alt={item.title} />
									<h1>{item.title}</h1>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
