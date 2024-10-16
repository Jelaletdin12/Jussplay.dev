import { Link } from 'react-router-dom'
import bg from '../../assets/blockchain/01.png'
import logo from '../../assets/blockchain/logo.png'
import platformImage from '../../assets/web3/img/platform.png'
// Components
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import {
	subTitleHeaderBlockchain,
	titleHeaderBlockchain,
} from '../../components/Util/dataBlockchainPage'
import transition from '../../pageTransition'
// Styles
import {
	subtitleBusinessReach,
	subTitleNextGen,
	titleBusinessReach,
	titleNextGen,
} from '../../components/Util/Web3/dataWeb3'
import { Agency } from '../../components/Web3/Agency/Agency'
import { Engagement } from '../../components/Web3/Engagement/Engagement'
import { Firm } from '../../components/Web3/Firm/Firm'
import { PlatformWeb3 } from '../../components/Web3/PlatformWeb3/PlatformWeb3'
import { Process } from '../../components/Web3/Process/Process'
import { RealEstate } from '../../components/Web3/RealEstate/RealEstate'
import { Revolution } from '../../components/Web3/Revolution/Revolution'
import { ServiceProvider } from '../../components/Web3/ServiceProvider/ServiceProvider'
import { Strategy } from '../../components/Web3/Strategy/Strategy'
import { TechStack } from '../../components/Web3/TechStack/TechStack'
import { Trusted } from '../../components/Web3/Trusted/Trusted'
import { USA } from '../../components/Web3/USA/USA'
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './web3.module.scss'

const Web3 = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header>
					<Link to={'/home'}>
						<img src={logo} alt='logo' />
					</Link>
				</Header>
				<HeaderBlockchain
					title={titleHeaderBlockchain}
					subtitle={subTitleHeaderBlockchain}
				/>
				<img className={blockchainStyle.bgImg} src={bg} alt='bg-header' />
				<main className={styles.section__web3}>
					<PlatformWeb3
						title={titleNextGen}
						image={platformImage}
						text={subTitleNextGen}
					/>
					<Revolution />
					<ServiceProvider />
					<Strategy />
					<Firm />
					<Trusted />
					<TechStack />
					<PlatformWeb3
						image={platformImage}
						title={titleBusinessReach}
						text={subtitleBusinessReach}
					/>
					<Engagement />
					<Process />
					<RealEstate />
					<Agency />
					<USA />
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Web3)
