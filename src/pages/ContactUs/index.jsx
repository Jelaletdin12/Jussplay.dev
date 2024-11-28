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
	const [isFocusedArr, setIsFocusedArr] = useState({
		input1: false,
		input2: false,
		input3: false,
		input4: false,
		input5: false,
	})
	const [isChangedArr, setIsChangedArr] = useState({
		firstName: false,
		lastName: false,
		email: false,
		phone: false,
		message: false,
	})

	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		message: '',
		company: 'TM',
		country: 'TM',
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) })

	const { input1, input2, input3, input4, input5 } = isFocusedArr
	const { firstName, lastName, email, phone, message } = isChangedArr

	const onBlurAndFocusedHandler = (name, value) => {
		setIsFocusedArr(prevState => ({ ...prevState, [name]: value }))
	}

	const onChangeInputHandler = (e, key) => {
		setUserData(prevState => ({ ...prevState, [key]: e.target.value }))

		if (e.target.value === '') {
			setIsChangedArr(prevStateArr => ({
				...prevStateArr,
				[key]: false,
			}))
			return
		}

		setIsChangedArr(prevStateArr => ({
			...prevStateArr,
			[key]: true,
		}))
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
		reset()
		console.log('Send data to form:', data)
	}

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
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() => onBlurAndFocusedHandler('input1', false)}
										onFocus={() => onBlurAndFocusedHandler('input1', true)}
										onChange={e => onChangeInputHandler(e, 'firstName')}
										type='text'
										{...register('firstName')}
									/>
								</span>
								{errors.firstName ? (
									<span
										className={`${styles.placeholder__error} ${
											input1 || firstName ? styles.placeholderError : null
										}`}
									>
										{errors.firstName.message}
									</span>
								) : (
									<span
										className={`${styles.placeholder} ${
											input1 || firstName ? styles.placeholderActive : null
										}`}
									>
										First Name
									</span>
								)}
							</label>
						</div>
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() => onBlurAndFocusedHandler('input2', false)}
										onFocus={() => onBlurAndFocusedHandler('input2', true)}
										onChange={e => onChangeInputHandler(e, 'lastName')}
										type='text'
										{...register('lastName')}
									/>
								</span>
								{errors.lastName ? (
									<span
										className={`${styles.placeholder__error} ${
											input2 || lastName ? styles.placeholderError : null
										}`}
									>
										{errors.lastName.message}
									</span>
								) : (
									<span
										className={`${styles.placeholder} ${
											input2 || firstName ? styles.placeholderActive : null
										}`}
									>
										Last Name
									</span>
								)}
							</label>
						</div>
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() => onBlurAndFocusedHandler('input3', false)}
										onFocus={() => onBlurAndFocusedHandler('input3', true)}
										onChange={e => onChangeInputHandler(e, 'email')}
										type='email'
										{...register('email')}
									/>
								</span>
								{errors.email ? (
									<span
										className={`${styles.placeholder__error} ${
											input3 || email ? styles.placeholderError : null
										}`}
									>
										{errors.email.message}
									</span>
								) : (
									<span
										className={`${styles.placeholder} ${
											input3 || email ? styles.placeholderActive : null
										}`}
									>
										Email
									</span>
								)}
							</label>
						</div>
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() => onBlurAndFocusedHandler('input4', false)}
										onFocus={() => onBlurAndFocusedHandler('input4', true)}
										onChange={e => onChangeInputHandler(e, 'phone')}
										type='tel'
										{...register('phone')}
									/>
								</span>
								{errors.phone ? (
									<span
										className={`${styles.placeholder__error} ${
											input4 || phone ? styles.placeholderError : null
										}`}
									>
										{errors.phone.message}
									</span>
								) : (
									<span
										className={`${styles.placeholder} ${
											input4 || phone ? styles.placeholderActive : null
										}`}
									>
										Phone
									</span>
								)}
							</label>
						</div>
						<div
							className={styles.inputCol}
							style={{
								width: '100%',
							}}
						>
							<label>
								<span className={styles.inputWrapper}>
									<textarea
										onBlur={() => onBlurAndFocusedHandler('input5', false)}
										onFocus={() => onBlurAndFocusedHandler('input5', true)}
										onChange={e => onChangeInputHandler(e, 'message')}
										{...register('message')}
									></textarea>
								</span>
								{errors.message ? (
									<span
										className={`${styles.placeholder__error} ${
											input5 || message ? styles.placeholderError : null
										}`}
									>
										{errors.message.message}
									</span>
								) : (
									<span
										className={`${styles.placeholder} ${
											input5 || message ? styles.placeholderActive : null
										}`}
									>
										Message
									</span>
								)}
							</label>
						</div>
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
