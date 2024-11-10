// Styles
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Components
import { Title } from '../../Blockchain/Title'
// Utils
import {
	subTitleBusinessPerform,
	titleBusinessPerform,
} from '../../Util/Service/IOS/data'
// Assets
import bg01 from '../../../assets/Service_1/Rectangle.png'
export const AppPerform = () => {
	return (
		<section className={iosStyles.ios__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={iosStyles.business__perform_row}>
					<div className={iosStyles.business__perform_about}>
						<Title
							title={titleBusinessPerform}
							subTitle={subTitleBusinessPerform}
						/>
					</div>
					<img src={bg01} alt='' />
				</div>
			</div>
		</section>
	)
}
