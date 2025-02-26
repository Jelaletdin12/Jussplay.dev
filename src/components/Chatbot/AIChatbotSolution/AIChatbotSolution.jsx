/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'

export const AIChatbotSolution = ({
	title,
	text,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.chat_bot__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.chat_bot_box__solution}>
					<div className={styles.chat_bot_box__solution_row}>
						<div className={styles.chat_bot_box__solution_image}>
							<img src={image} alt={title} />
						</div>
						<div className={styles.chat_bot_box__solution_content}>
							<TitleBlockchain title={title} subTitle={text} />
							<BtnBlockchain />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
