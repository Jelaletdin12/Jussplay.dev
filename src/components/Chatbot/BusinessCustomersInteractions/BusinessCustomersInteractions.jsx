/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'

export const BusinessCustomersInteractions = ({
	title,
	text,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.chat_bot_customers_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.chat_bot_customers_row}>
					<div className={styles.chat_bot_customers_content}>
						<TitleBlockchain title={title} subTitle={text} />
						<BtnBlockchain />
					</div>
					<div className={styles.chat_bot_customers_images}>
						<img src={image} alt={title} />
					</div>
				</div>
			</div>
		</section>
	)
}
