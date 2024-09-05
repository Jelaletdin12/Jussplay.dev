import { Link } from 'react-router-dom'
import styles from './errorPage.module.scss'

export const NotFoundPage = () => {
	return (
		<div className={styles.page__error}>
			<h1>404</h1>
			<h2>Page not found</h2>
			<p>
				return to page at<Link to={'home'}>Home</Link>
			</p>
		</div>
	)
}
