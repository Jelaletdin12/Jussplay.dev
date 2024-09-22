/* eslint-disable react/prop-types */
import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import styles from '../../pages/Blockchain/blockchain.module.scss'

export const Title = ({ title, subTitle, spanText }) => {
	return (
		<div className={styles.headerTitle}>
			<h1>{title}</h1>
			<p>
				{subTitle}
				<span>{spanText}</span>
			</p>
			<HashLink to={'#startJourney'} smooth>
				<button className={styles.blockchainBtn}>
					Meet with us <IoIosArrowForward />
				</button>
			</HashLink>
		</div>
	)
}
