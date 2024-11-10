// Styles
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Components
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import {
	cardsIosGuarantee,
	subTitleIosGuarantee,
	titleIosGuarantee,
} from '../../Util/Service/IOS/data'
import { CardGuarantee } from './CardGuarantee'

export const Guarantee = () => {
	return (
		<section className={iosStyles.ios__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleIosGuarantee}
					subTitle={subTitleIosGuarantee}
				/>
				<div className={iosStyles.guarantee__row}>
					{cardsIosGuarantee.map(({ id, image, title, text }) => (
						<CardGuarantee key={id} image={image} title={title} text={text} />
					))}
				</div>
			</div>
		</section>
	)
}
