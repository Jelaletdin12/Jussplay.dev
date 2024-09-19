import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { subTitleFeatures, titleFeatures } from '../../Util/contentMetaverse'
import { TitleMetaverse } from '../TitleMetaverse'
import { FeaturesCards } from './FeaturesCards'

export const MetaverseFeatures = () => {
	return (
		<>
			<section className={styles.section__features}>
				<div className={styles.metaverseContainer}>
					<TitleMetaverse title={titleFeatures} subTitle={subTitleFeatures} />
					<FeaturesCards />
				</div>
			</section>
			<section className={styles.section__features}>
				<div className={styles.metaverseContainer}>
					<TitleMetaverse title={titleFeatures} />
					<FeaturesCards />
				</div>
			</section>
		</>
	)
}
