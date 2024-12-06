import { FaAngleLeft } from 'react-icons/fa'
import styles from './header.module.scss'

export const HeaderButton = ({ toggleHeader, isHeaderVisible }) => {
	return (
		<button
			className={styles.toggleButton}
			onClick={toggleHeader}
			style={{
				position: 'fixed',
				top: '30px',
				right: '5px',
				zIndex: '1000',
				borderRadius: '100px',
			}}
		>
			{isHeaderVisible ? 'Hide' : <FaAngleLeft />}
		</button>
	)
}
