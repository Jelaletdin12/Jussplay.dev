import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import styles from './btnBlockchain.module.scss'

export const BtnBlockchain = () => {
	return (
		<HashLink to={'#startJourney'} smooth>
			<button className={styles.blockchainBtn}>
				Meet with us <IoIosArrowForward />
			</button>
		</HashLink>
	)
}
