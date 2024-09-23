// Assets
import bg from '../../assets/blockchain/01.png'
import image01 from '../../assets/Metaverse/Platform/01.png'
import image02 from '../../assets/Metaverse/TechnologyUpsurge/01.png'
// Components
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MetaverseFeatures } from '../../components/Metaverse/Features/MetaverseFeatures'
import { Platform } from '../../components/Metaverse/Platform/Platform'
import { MetaverseService } from '../../components/Metaverse/Services/MetaverseService'
import { MetaverseServicesInclude } from '../../components/Metaverse/ServicesInclude/MetaverseServicesInclude'
import { MetaverseSolutions } from '../../components/Metaverse/Solutions/MetaverseSolutions'
import { CustomScroll } from '../../components/scroll/CustomScroll'
// Utils
import {
	subTitleHeaderBlockchain,
	titleHeaderBlockchain,
} from '../../components/Util/dataBlockchainPage'
import {
	subTitlePlatform,
	subTitleTechnologyUpsurge,
	titlePlatform,
	titleTechnologyUpsurge,
} from '../../components/Util/contentMetaverse'
// Style && Effects
import transition from '../../pageTransition'
import styles from './metaverse.module.scss'
// ==========
const Metaverse = () => {
	return (
		<CustomScroll>
			<div className={styles.page__metaverse}>
				<Header />
				<HeaderBlockchain
					title={titleHeaderBlockchain}
					subtitle={subTitleHeaderBlockchain}
				/>
				<img className={styles.bgImg} src={bg} alt='' />
				<main className={styles.main__metaverse}>
					<MetaverseSolutions />
					<MetaverseService />
					<Platform
						image={image01}
						title={titlePlatform}
						subTitle={subTitlePlatform}
					/>
					<MetaverseServicesInclude />
					<MetaverseFeatures />
					<Platform
						image={image02}
						title={titleTechnologyUpsurge}
						subTitle={subTitleTechnologyUpsurge}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Metaverse)
