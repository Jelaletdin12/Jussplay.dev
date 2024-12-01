/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styles from '../../pages/Blockchain/blockchain.module.scss'
import styleBtnForm from '../../pages/ContactUs/contactus.module.scss'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
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

export const Form = () => {
	const [focusStates, setFocusStates] = useState({})
	const [inputValues, setInputValues] = useState({})

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) })

	const handleFocusChange = (field, isFocused) => {
		setFocusStates(prev => ({ ...prev, [field]: isFocused }))
	}

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
		reset()
		console.log('Send data to form:', data)
	}

	const getPlaceholderClass = field => {
		return focusStates[field] || inputValues[field]
			? styles.placeholderActive
			: ''
	}

	const getErrorClass = field => {
		return errors[field] ? styles.placeholderError : ''
	}

	return (
		<div className={styles.blockchainForm}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1 className={styles.formTitle}>BOOK A CONSULTATION</h1>
				{['firstName', 'email', 'phone', 'message'].map(field => (
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
				))}
				<div className={styles.btnForm}>
					<button
						type='submit'
						style={{
							backgroundColor: '#000',
							color: '#fff',
						}}
						data-back={'Send Message ?'}
						data-front={'Send Message'}
						className={styleBtnForm.form__btn}
					></button>
				</div>
			</form>
		</div>
	)
}
