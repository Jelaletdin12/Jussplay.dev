import { Link } from 'react-router-dom'
import DropdownContent from '../headerDropdownContent'
import styles from './header.module.scss'

export const Nav = ({
	onMouseEnterService,
	onMouseEnterBlockchain,
	onMouseLeave,
	onClick,
	activeDropdown,
}) => {
	return (
		<nav className={styles.header_nav}>
			<ul>
				<li
					onMouseEnter={onMouseEnterService}
					onMouseLeave={onMouseLeave}
					onClick={onClick}
				>
					<Link to='/service'>Services</Link>
					{activeDropdown === 'services' && (
						<DropdownContent dropdownType='services' />
					)}
				</li>
				<li
					onMouseEnter={onMouseEnterBlockchain}
					onMouseLeave={onMouseLeave}
					onClick={onClick}
				>
					Blockchain
					{activeDropdown === 'blockchain' && (
						<DropdownContent dropdownType='blockchain' />
					)}
				</li>
				<li>
					<Link to='/contactus' onClick={onClick}>
						Contact us
					</Link>
				</li>
				<li>
					<Link to='/aboutus' onClick={onClick}>
						About us
					</Link>
				</li>
			</ul>
		</nav>
	)
}
