import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { subTitleService, titleService } from '../../Util/contentMetaverse'
import { ServiceContent } from './ServicesContent'

export const MetaverseService = () => {
	return (
		<section className={styles.sectionService}>
			<div className={styles.metaverseContainer}>
				<TitleBlockchain title={titleService} subTitle={subTitleService} />
				<ServiceContent />
			</div>
		</section>
	)
}
