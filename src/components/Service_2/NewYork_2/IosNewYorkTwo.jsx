// Styles
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Components
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { subTitleNewYork, titleNewYork } from '../../Util/Service/IOS/data'
import { IosList } from './IosList'
import { IosListAbout } from './IosListAbout'

export const IosNewYorkTwo = () => {
	return (
		<section className={iosStyles.ios__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleNewYork} subTitle={subTitleNewYork} />
				<div className={iosStyles.ios__about_develop}>
					<div className={iosStyles.ios__about_custom__scroll}>
						<div className={iosStyles.ios__about_row}>
							<IosList />
							<IosListAbout />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
