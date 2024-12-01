// Styles
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './ios.module.scss'
// Assets
import bg from '../../assets/oval.png'
// Components
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
import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'

const ServiceIos = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderServicePages
					image={bg}
					title={titleHeaderWallet}
					text={subTitleHeaderWallet}
				/>
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
