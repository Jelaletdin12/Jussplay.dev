/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { Card } from '../../Metaverse/Features/Card'

export const AIChatbotServiceOffer = ({
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
				<div className={blockchainStyle.blockchain__cards_row}>
					{cards.map(({ id, title, text, image }) => (
						<Card key={id} image={image} title={title} text={text} />
					))}
				</div>
			</div>
		</section>
	)
}
