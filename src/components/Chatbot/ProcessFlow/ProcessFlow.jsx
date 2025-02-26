/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { ProcessFlowList } from './ProcessFlowList'

export const ProcessFlow = ({
	title,
	text,
	image,
	styles,
	blockchainStyle,
}) => {
	return (
		<section className={styles.chat_bot__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={title} subTitle={text} />
				<div className={styles.processFlow_row}>
					<div className={styles.processFlow_asset}>
						<img src={image} alt={title} />
					</div>
					<ProcessFlowList styles={styles} />
				</div>
			</div>
		</section>
	)
}
