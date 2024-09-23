import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Metaverse/metaverse.module.scss'
import {
	serviceIncludeContentLeft,
	serviceIncludeContentRight,
	titleServiceInclude,
} from '../../Util/contentMetaverse'
import { AboutServicesInclude } from './AboutServicesInclude'

export const MetaverseServicesInclude = () => {
	return (
		<section className={styles.sectionInclude}>
			<div className={styles.metaverseContainer}>
				<TitleBlockchain title={titleServiceInclude} />
				<div className={styles.serviceInclude__row}>
					<div className={styles.serviceInclude__col}>
						{serviceIncludeContentLeft.map(item => (
							<AboutServicesInclude
								key={item.id}
								title={item.title}
								text={item.text}
							/>
						))}
					</div>
					<div className={styles.serviceInclude__col}>
						{serviceIncludeContentRight.map(item => (
							<AboutServicesInclude
								key={item.id}
								title={item.title}
								text={item.text}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
