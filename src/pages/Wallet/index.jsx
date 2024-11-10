// Router - link
import { Link } from 'react-router-dom'
// Assets
import bg from '../../assets/blockchain/01.png'
import logo from '../../assets/blockchain/logo.png'
// Components
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
// Data
import {
	subTitleHeaderWallet,
	titleHeaderWallet,
} from '../../components/Util/Wallet/dataWallet'
// Effects and Styles
import { AboutWallet } from '../../components/Wallet/About/AboutWallet'
import { BlockchainProduct } from '../../components/Wallet/BP/BlockchainProduct'
import { Cryptocurrency } from '../../components/Wallet/Cryptocurrency/Cryptocurrency'
import { Functionality } from '../../components/Wallet/Functionality/Functionality'
import { Leaders } from '../../components/Wallet/Leaders/Leaders'
import { RisingMax } from '../../components/Wallet/RisingMax/RisingMax'
import { Security } from '../../components/Wallet/Security/Security'
import { WalletService } from '../../components/Wallet/Service/WalletService'
import transition from '../../pageTransition'
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './wallet.module.scss'

const Wallet = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header>
					<Link to={'/home'}>
						<img src={logo} alt='logo' />
					</Link>
				</Header>
				<HeaderBlockchain
					title={titleHeaderWallet}
					subtitle={subTitleHeaderWallet}
				/>
				<img className={blockchainStyle.bgImg} src={bg} alt='bg-header' />
				<main className={styles.main__wallet}>
					<Leaders />
					<BlockchainProduct />
					<AboutWallet />
					<Security />
					<Cryptocurrency />
					<WalletService />
					<RisingMax />
					<Functionality />
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Wallet)
