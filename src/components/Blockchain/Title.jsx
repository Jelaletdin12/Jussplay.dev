import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import styles from '../../pages/Blockchain/blockchain.module.scss'

export const Title = () => {
	return (
		<div className={styles.headerTitle}>
			<h1>Custom Android App Development Company</h1>
			<p>
				Leverage our custom Android app development services to build fully
				functional & secure Android app solutions while taking advantage of all
				the latest technologies. Our expert Android mobile app developers create
				highly intuitive, cost-efficient & feature-rich apps that maximize brand
				loyalty.
				<span>
					Our robust Android solutions solve complex business challenges across
					the globe.
				</span>
			</p>
			<HashLink to={'#startJourney'} smooth>
				<button className={styles.blockchainBtn}>
					Meet with us <IoIosArrowForward />
				</button>
			</HashLink>
		</div>
	)
}
