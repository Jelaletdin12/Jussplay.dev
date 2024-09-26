import bg from '../../assets/blockchain/01.png'
import icon1 from '../../assets/token/ic1.png'
import icon2 from '../../assets/token/ic2.png'
import icon3 from '../../assets/token/ic3.png'
import icon4 from '../../assets/token/ic4.png'
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer/index'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import Features from '../../components/Token/Features'
import NftCards from '../../components/Token/NftCards'
import Services from '../../components/Token/services'
import FeatureCards from '../../components/Token/featureCards'
import EmpoweringSection from '../../components/Token/empowering'
import {
	subTitleNFTTokenHeaderBlockchain,
	titleNFTTokenHeaderBlockchain,
} from '../../components/Util/dataBlockchainPage'
import styles from './token.module.scss'
import transition from '../../pageTransition'

const token = () => {
	return (
		<CustomScroll>
			<div className={styles.appContainer}>
				<Header />
				<HeaderBlockchain
					title={titleNFTTokenHeaderBlockchain}
					subtitle={subTitleNFTTokenHeaderBlockchain}
				/>
				<Services />
				<NftCards />
				<Features />
				<div className={styles.frame}>
					<div className={styles.header}>
						<h2>Non Fungible Token and Blockchain Relationship</h2>
						<p>
							Do not confuse the NFT with crypto. The only thing they have in
							common is Blockchain. Have a look at it how ?
						</p>
					</div>
					<div className={styles.service}>
						<div className={styles.items}>
							<img src={icon3} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon4} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon2} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon1} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon3} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon4} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon2} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
						<div className={styles.items}>
							<img src={icon1} alt='' />
							<div className={styles.itemsContent}>
								<p>
									NFT is stored securely in Blockchain, which means the tokens
									can never be removed, destroyed, or replicated no matter what.
								</p>
							</div>
						</div>
					</div>
				</div>
				<FeatureCards />
				<EmpoweringSection />
				<img className={styles.bgImg} src={bg} alt='' />
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(token)
