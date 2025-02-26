/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { cardsChatbotRisingMax } from '../../Util/Service/ChatBot/data'
import { CardAIRisingMax } from './CardAIRisingMax'

export const AIRisingMax = ({ title, text, styles, blockchainStyle }) => {
	return (
		<section className={styles.chat_bot__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={title} subTitle={text} />
				<div className={styles.chat_bot__rising_max_row}>
					{cardsChatbotRisingMax.map(({ id, image, title, text }) => (
						<CardAIRisingMax
							key={id}
							styles={styles}
							image={image}
							title={title}
							text={text}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
