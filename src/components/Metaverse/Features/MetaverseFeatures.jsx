import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { subTitleFeatures, titleFeatures } from '../../Util/contentMetaverse'
import { FeaturesCards } from './FeaturesCards'

export const MetaverseFeatures = () => {
	return (
		<>
			<section className={styles.section__features}>
				<div className={styles.metaverseContainer}>
					<TitleBlockchain title={titleFeatures} subTitle={subTitleFeatures} />
					<FeaturesCards />
				</div>
			</section>
			<section className={styles.section__features}>
				<div className={styles.metaverseContainer}>
					<TitleBlockchain title={titleFeatures} />
					<FeaturesCards />
				</div>
			</section>
		</>
	)
}
