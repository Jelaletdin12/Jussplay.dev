import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './header.module.scss'

export const HeaderLogo = ({ onClick }) => {
	return (
		<div className={styles.logo}>
			<Link to='/home' onClick={onClick}>
				<img src={logo} alt='Logo' width={90} height={90} />
			</Link>
		</div>
	)
}
