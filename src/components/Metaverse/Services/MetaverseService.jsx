import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { subTitleService, titleService } from '../../Util/contentMetaverse'
import { TitleMetaverse } from '../TitleMetaverse'
import { ServiceContent } from './ServicesContent'

export const MetaverseService = () => {
	return (
		<section className={styles.sectionService}>
			<div className={styles.metaverseContainer}>
				<TitleMetaverse title={titleService} subTitle={subTitleService} />
				<ServiceContent />
			</div>
		</section>
	)
}
