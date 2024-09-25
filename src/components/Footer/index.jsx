/* eslint-disable react/display-name */
import React from 'react'
import { Link } from 'react-router-dom'
// Assets
// Logo 1V
// import logo from '../../assets/logo.png'
// Logo 2V
import logo from '../../assets/blockchain/logo.png'
// Styles
import styles from './footer.module.scss'

const Footer = React.memo(() => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_upper}>
				<div className={styles.footer_upper_logoContainer}>
					<Link to={'/home'}>
						<div className={styles.footer_upper_logo}>
							<img src={logo} alt='Jussplay Logo' />
						</div>
					</Link>
					<div className={styles.footer_upper_motto}>
						<span>Just say it</span>
						<span>We will make it</span>
					</div>
				</div>
				<div className={styles.footer_upper_links}>
					<div className={styles.footer_upper_links_col}>
						<div className={styles.footer_upper_links_col_title}>Jussplay</div>
						<ul>
							<li>Work with us</li>
							<li>Cases</li>
							<li>
								<Link to='/career'>Career</Link>
							</li>
						</ul>
					</div>
					<div className={styles.footer_upper_links_col}>
						<div className={styles.footer_upper_links_col_title}>Social</div>
						<ul>
							<li>
								<a
									href='https://wa.me/+905389499878'
									target='_blank'
									rel='noopener noreferrer'
								>
									WhatsApp
								</a>
							</li>
							<li>
								<a href='#'>Telegram</a>
							</li>
							<li>
								<a
									href='http://www.instagram.com/jussplay.dev'
									target='_blank'
									rel='noopener noreferrer'
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.footer_upper_links_col}>
						<div className={styles.footer_upper_links_col_title}>
							Additional
						</div>
						<ul>
							<li>
								<Link to='/career'>Career</Link>
							</li>
							<li>Our team</li>
							<li>Partners</li>
						</ul>
					</div>
				</div>
			</div>
			<h1 className={styles.footer_lower}>JUSSPLAY.DEV</h1>
		</footer>
	)
})

export default Footer
