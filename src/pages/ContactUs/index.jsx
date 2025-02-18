import { useState } from 'react'
// React-hook-form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// Components
import { ContactForm } from '../../components/ContactUs/ContactForm'
import { ContactInfo } from '../../components/ContactUs/ContactInfo'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
// Styles
import axios from 'axios'
import { schema } from '../../components/Util/validation/contact-us'
import { API_EMAIL_SEND } from '../../constants/api'
import styles from './contactus.module.scss'

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
		try {
			if (!API_EMAIL_SEND) {
				throw new Error('API_SEND_EMAIL is not defined')
			}

			const request = await axios.post(API_EMAIL_SEND, data, {
				headers: { 'Content-Type': 'application/json' },
			})
			console.log('Send data to form:', request.data)
		} catch (error) {
			console.error(
				'Ошибка запроса:',
				error instanceof Error ? error.message : error
			)
		} finally {
			reset?.()
		}
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
					<ContactInfo />
					<ContactForm
						handleSubmit={handleSubmit}
						onSubmit={onSubmit}
						handleFocusChange={handleFocusChange}
						handleInputChange={handleInputChange}
						register={register}
						getPlaceholderClass={getPlaceholderClass}
						getErrorClass={getErrorClass}
						errors={errors}
					/>
				</div>
			</main>
			<Footer />
		</CustomScroll>
	)
}

export default transition(ContactUs)
