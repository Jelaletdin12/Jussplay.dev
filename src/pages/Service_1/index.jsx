import bg from '../../assets/oval.png'
import { CustomScroll } from '../../components/scroll/CustomScroll'

import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import AndroidDevelopmentProcess from '../../components/Sercvie-1/AndroidDevelopmentProcess'
import AndroidService from '../../components/Sercvie-1/AndroidServices'
import AndroidStatsComponent from '../../components/Sercvie-1/AndroidStatsComponent'
import CuttingEdgeTech from '../../components/Sercvie-1/CuttingEdgeTech'
import Scroll from '../../components/Sercvie-1/ScrollSec'
import {
	subTitleNFTTokenHeaderBlockchain,
	titleNFTTokenHeaderBlockchain,
} from '../../components/Util/dataBlockchainPage'
import transition from '../../pageTransition'
import styles from './Service.module.scss'

const Service_1 = () => {
	return (
		<CustomScroll>
			<div className={styles.appContainer}>
				<Header />
				<HeaderServicePages
					image={bg}
					title={titleNFTTokenHeaderBlockchain}
					text={subTitleNFTTokenHeaderBlockchain}
				/>
				<AndroidStatsComponent />
				<AndroidService />
				<AndroidDevelopmentProcess />
				<Scroll />
				<CuttingEdgeTech />
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Service_1)
