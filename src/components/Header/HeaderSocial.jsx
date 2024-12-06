import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import styles from './header.module.scss'

export const HeaderSocial = ({ setIsMenuActive }) => {
	return (
		<>
			<div
				className={styles.header_menu_close}
				onClick={() => setIsMenuActive(false)}
			>
				<IoMdClose />
			</div>

			<div className={styles.header_menu_socials}>
				<div className={styles.header_menu_socials_icons}>
					<a href='https://wa.me/9377913945' target='_blank' rel='noreferrer'>
						<FaWhatsapp />
					</a>
					<a
						href='https://instagram.com/jussplay.dev'
						target='_blank'
						rel='noreferrer'
					>
						<FaInstagram />
					</a>
				</div>
				<div className={styles.header_menu_socials_text}>
					Follow us on Instagram
				</div>
			</div>
		</>
	)
}
