/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { CardAI } from './CardAI'

export const AIChatbotBusinessVerticals = ({
	title,
	text,
	styles,
	blockchainStyle,
	cards,
}) => {
	return (
		<section className={styles.chat_bot__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={title} subTitle={text} />
				<div className={styles.chat_bot__cards_row}>
					{cards.map(({ id, title, text, image }) => (
						<CardAI
							key={id}
							cardImage={image}
							cardTitle={title}
							cardText={text}
							styles={styles}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
