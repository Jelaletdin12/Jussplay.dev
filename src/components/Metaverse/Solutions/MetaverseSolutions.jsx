import styles from '../../../pages/Metaverse/metaverse.module.scss'
import {
	dataCardSolution,
	subTitleSolution,
	titleSolution,
} from '../../Util/contentMetaverse'
import { TitleMetaverse } from '../TitleMetaverse'
import { MetaverseSolutionsCards } from './MetaverseSolutionsCards'

export const MetaverseSolutions = () => {
	return (
		<section className={styles.sectionSolutions}>
			<div className={styles.metaverseContainer}>
				<TitleMetaverse title={titleSolution} subTitle={subTitleSolution} />
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
