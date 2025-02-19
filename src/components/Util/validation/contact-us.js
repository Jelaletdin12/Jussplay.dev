import * as yup from 'yup'

export const schema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email is required'),
	phone: yup
		.string()
		.matches(/^\+\d{7,15}$/, 'Phone number must be between 7 and 15 digits')
		.required('Phone is required'),
	message: yup.string().required('Message is required'),
})
