import { Link } from 'react-router-dom'
import styles from './errorPage.module.scss'

export const NotFoundPage = () => {
	return (
		<div className={styles.page__error}>
			<div className={styles.page__content}>
				<h1>404</h1>
				<h2>Page not found</h2>
				<p>
					return to page at
					<Link to={'home'}>
						<span>Home</span>
					</Link>
				</p>
			</div>
		</div>
	)
}
