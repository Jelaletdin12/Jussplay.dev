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
import { schema } from '../../components/Util/validation/contact-us'
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
