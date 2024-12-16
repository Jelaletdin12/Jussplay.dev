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
		.matches(/^\+?[1-9]\d{1,14}$/, 'Phone must be a number')
		.required('Phone is required'),
	message: yup.string().required('Message is required'),
})
