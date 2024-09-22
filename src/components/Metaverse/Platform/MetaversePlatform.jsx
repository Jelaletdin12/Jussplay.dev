import { HashLink } from 'react-router-hash-link'

import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

export const MetaversePlatform = ({ image, title, subTitle }) => {
	return (
		<section className={styles.section__platform}>
			<div className={styles.metaverseContainer}>
				<div className={styles.platform__row}>
					<div className={styles.platform__col}>
						<img src={image} alt={title} />
					</div>
					<div className={styles.platform__col}>
						<h1>{title}</h1>
						<p>{subTitle}</p>
						<HashLink to={'#startJourney'} smooth>
							<button className={styles.blockchainBtn}>
								Meet with us <IoIosArrowForward />
							</button>
						</HashLink>
					</div>
				</div>
			</div>
		</section>
	)
}
