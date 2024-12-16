// React-icons
import {
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
	FaWhatsapp,
} from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'
// Assets
import ellipseOne from '../../assets/ellipse1.png'
import ellipseTwo from '../../assets/ellipse2.png'
// Styles
import styles from '../../pages/ContactUs/contactus.module.scss'

export const ContactInfo = () => {
	return (
		<div className={styles.contactus_mainbody_left}>
			<div className={styles.contactus_mainbody_left_title}>
				Contact Information
			</div>
			<p>Say something to start a live chat!</p>

			<div className={styles.contactus_mainbody_left_contactinfo}>
				<div className={styles.contactus_mainbody_left_contactinfo_row}>
					<FaPhoneVolume /> +993 77 77 77 77
				</div>
				<div className={styles.contactus_mainbody_left_contactinfo_row}>
					<IoMdMail /> contact@jussplay.dev
				</div>
				<div className={styles.contactus_mainbody_left_contactinfo_row}>
					<IoLocation /> Dubai, UAE
				</div>
			</div>

			<div className={styles.contactus_mainbody_left_links}>
				<div className={styles.contactus_mainbody_left_links_icon}>
					<FaLinkedinIn />
				</div>
				<div className={styles.contactus_mainbody_left_links_icon}>
					<a
						style={{ height: 22, color: '#fff' }}
						href='http://www.instagram.com/jussplay.dev'
					>
						<FaInstagram />
					</a>
				</div>
				<div className={styles.contactus_mainbody_left_links_icon}>
					<FaTelegramPlane />
				</div>
				<div className={styles.contactus_mainbody_left_links_icon}>
					<a
						style={{ height: 22, color: '#fff' }}
						href='https://wa.me/+905389499878'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaWhatsapp />
					</a>
				</div>
			</div>

			<div id='one' className={styles.contactus_mainbody_left_ellipse1}>
				<img src={ellipseOne} alt='' />
			</div>
			<div id='two' className={styles.contactus_mainbody_left_ellipse2}>
				<img src={ellipseTwo} alt='' />
			</div>
		</div>
	)
}
