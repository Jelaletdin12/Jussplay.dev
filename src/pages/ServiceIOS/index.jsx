import { Link } from 'react-router-dom'
// Styles
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './ios.module.scss'
// Assets
import bg from '../../assets/blockchain/01.png'
import logo from '../../assets/blockchain/logo.png'
// Components
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { AppPerform } from '../../components/Service_2/AppPerform/AppPerform'
import { Guarantee } from '../../components/Service_2/Guarantee/Guarantee'
import { IosAppAchievements } from '../../components/Service_2/IosLeoders/IosAppAchievements'
import { Making } from '../../components/Service_2/Making/Making'
import { IosNewYork } from '../../components/Service_2/NewYork/IosNewYork'
import { IosNewYorkTwo } from '../../components/Service_2/NewYork_2/IosNewYorkTwo'
import {
	subTitleHeaderWallet,
	titleHeaderWallet,
} from '../../components/Util/Wallet/dataWallet'

const ServiceIos = () => {
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
				<img className={blockchainStyle.bgImg} src={bg} alt='bg' />
				<main className={styles.main__ios}>
					<IosAppAchievements />
					<IosNewYork />
					<IosNewYorkTwo />
					<AppPerform />
					<Making />
					<Guarantee />
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(ServiceIos)
