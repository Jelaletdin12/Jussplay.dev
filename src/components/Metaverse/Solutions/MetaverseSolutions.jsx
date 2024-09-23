import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Metaverse/metaverse.module.scss'
import {
	dataCardSolution,
	subTitleSolution,
	titleSolution,
} from '../../Util/contentMetaverse'
import { MetaverseSolutionsCards } from './MetaverseSolutionsCards'

export const MetaverseSolutions = () => {
	return (
		<section className={styles.sectionSolutions}>
			<div className={styles.metaverseContainer}>
				<TitleBlockchain title={titleSolution} subTitle={subTitleSolution} />
				<div className={styles.solutions__row}>
					{dataCardSolution.map(item => (
						<>
							<MetaverseSolutionsCards
								key={item.id}
								title={item.title}
								text={item.text}
								image={item.image}
							/>
						</>
					))}
				</div>
			</div>
		</section>
	)
}
