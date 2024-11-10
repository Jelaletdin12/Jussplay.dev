// Styles
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Components
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
// Utils
import {
	cardsIosMaking,
	subTitleIosMaking,
	titleIosMaking,
} from '../../Util/Service/IOS/data'
import { CardMaking } from './CardMaking'

export const Making = () => {
	return (
		<section className={iosStyles.ios__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleIosMaking} subTitle={subTitleIosMaking} />
				<div className={iosStyles.making__row}>
					{cardsIosMaking.map(({ id, title, text, image }) => (
						<CardMaking key={id} title={title} text={text} image={image} />
					))}
				</div>
			</div>
		</section>
	)
}
