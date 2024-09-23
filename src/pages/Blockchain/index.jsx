// Assets
import { Link } from 'react-router-dom'
import bg from '../../assets/blockchain/01.png'
import image from '../../assets/blockchain/image.png'
import logo from '../../assets/blockchain/logo.png'
// Components
import { BlockchainContent } from '../../components/Blockchain/BlockchainContent'
import { Counted } from '../../components/Blockchain/Counted'
import { DesignProcess } from '../../components/Blockchain/DesignProcess'
import { DigitalSolutions } from '../../components/Blockchain/DigitalSolutions'
import { Expertise } from '../../components/Blockchain/Expertise'
import { FeaturesBest } from '../../components/Blockchain/FeaturesBest'
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import { Rewarding } from '../../components/Blockchain/Rewarding'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Platform } from '../../components/Metaverse/Platform/Platform'
import { CustomScroll } from '../../components/scroll/CustomScroll'
// Utils
import {
	spanTextHeaderBlockchain,
	subTitleFutureScopeNFT,
	subTitleHeaderBlockchain,
	subTitlePlayToEarnNFT,
	textIdeaNFT,
	titleFutureScopeNFT,
	titleHeaderBlockchain,
	titleIdeaNFT,
	titlePlayToEarnNFT,
} from '../../components/Util/dataBlockchainPage'
// Style && Effects
import transition from '../../pageTransition'
import styles from './blockchain.module.scss'

const Blockchain = () => {
	return (
		<CustomScroll>
			<div className={styles.page__blockchain}>
				<Header>
					<Link to={'/home'}>
						<img src={logo} alt='logo' />
					</Link>
				</Header>
				<HeaderBlockchain
					title={titleHeaderBlockchain}
					subtitle={subTitleHeaderBlockchain}
					spanText={spanTextHeaderBlockchain}
				/>
				<main className={styles.blockchain__main}>
					<BlockchainContent />
					<Platform image={image} title={titleIdeaNFT} subTitle={textIdeaNFT} />
					<Expertise />
					<DesignProcess />
					<Platform
						image={image}
						title={titlePlayToEarnNFT}
						subTitle={subTitlePlayToEarnNFT}
					/>
					<FeaturesBest />
					<Rewarding />
					<Platform
						image={image}
						title={titleFutureScopeNFT}
						subTitle={subTitleFutureScopeNFT}
					/>
					<Counted />
					<DigitalSolutions />
				</main>
				<img className={styles.bgImg} src={bg} alt='' />
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Blockchain)
