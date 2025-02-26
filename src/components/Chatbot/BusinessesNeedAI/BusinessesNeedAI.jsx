/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'

export const BusinessesNeedAI = ({
	title,
	text,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.chat_bot__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.businesses_need__row}>
					<div className={styles.businesses_need__content}>
						<TitleBlockchain title={title} subTitle={text} />
						<BtnBlockchain />
					</div>
					<div className={styles.businesses_need__assets}>
						<img src={image} alt={title} />
					</div>
				</div>
			</div>
		</section>
	)
}
