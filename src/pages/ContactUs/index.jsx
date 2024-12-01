import { useState } from 'react'
import Footer from '../../components/Footer'
import transition from '../../pageTransition'
import styles from './contactus.module.scss'

import {
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
	FaWhatsapp,
} from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import ellipseOne from '../../assets/ellipse1.png'
import ellipseTwo from '../../assets/ellipse2.png'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'

const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
	phone: yup
		.string()
		.matches(/^\+?[1-9]\d{1,14}$/, 'Phone must be a number')
		.required('Phone is required'),
	message: yup.string().required('Message is required'),
})

function ContactUs() {
	const [focusStates, setFocusStates] = useState({})
	const [inputValues, setInputValues] = useState({})
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) })

	const handleFocusChange = (field, isFocused) =>
		setFocusStates(prev => ({ ...prev, [field]: isFocused }))

	const handleInputChange = e => {
		const { name, value } = e.target
		setInputValues(prev => ({ ...prev, [name]: value }))
	}

	const onSubmit = async data => {
		// try {
		// 	const emailSubmit = await emailjs.send(
		// 		'service_98xj0q7',
		// 		'template_p4ocvai',
		// 		data,
		// 		'hYHKOzXlqLTNIQct5'
		// 	)
		// 	const result = console.log(
		// 		'Email successfully sent:',
		// 		emailSubmit.text,
		// 		emailSubmit.status
		// 	)
		// 	reset()
		// 	return result
		// } catch (error) {
		// 	console.error('Error sending email:', error.text)
		// }
		console.log('Send data to form:', data)
		reset()
	}

	const getPlaceholderClass = field =>
		focusStates[field] || inputValues[field] ? styles.placeholderActive : ''

	const getErrorClass = field => (errors[field] ? styles.placeholderError : '')

	return (
		<CustomScroll>
			<Header />
			<main className={styles.contactus}>
				<div className={styles.contactus_title}>
					<div className={styles.contactus_title_bText}>Contact Us</div>
					<p>Any question or remarks? Just write us a message!</p>
				</div>
				<div className={styles.contactus_mainbody}>
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
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.inputContainer}
					>
						{['firstName', 'lastName', 'email', 'phone', 'message'].map(
							field => (
								<div key={field} className={styles.inputCol}>
									<label>
										<span className={styles.inputWrapper}>
											{field === 'message' ? (
												<textarea
													name={field}
													onBlur={() => handleFocusChange(field, false)}
													onFocus={() => handleFocusChange(field, true)}
													onChange={handleInputChange}
													{...register(field)}
												></textarea>
											) : (
												<input
													name={field}
													type={field === 'email' ? 'email' : 'text'}
													onBlur={() => handleFocusChange(field, false)}
													onFocus={() => handleFocusChange(field, true)}
													onChange={handleInputChange}
													{...register(field)}
												/>
											)}
										</span>
										<span
											className={`${styles.placeholder} ${getPlaceholderClass(
												field
											)} ${getErrorClass(field)}`}
										>
											{errors[field]?.message ||
												field.charAt(0).toUpperCase() + field.slice(1)}
										</span>
									</label>
								</div>
							)
						)}
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
							}}
						>
							<button
								type='submit'
								style={{
									backgroundColor: '#000',
									color: '#fff',
								}}
								data-back={'Send Message ?'}
								data-front={'Send Message'}
								className={styles.form__btn}
							></button>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</CustomScroll>
	)
}

export default transition(ContactUs)
