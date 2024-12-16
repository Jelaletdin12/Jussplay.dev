/* eslint-disable react/prop-types */
// Styles
import styles from '../../pages/ContactUs/contactus.module.scss'

export const ContactForm = ({
	handleSubmit,
	onSubmit,
	handleFocusChange,
	handleInputChange,
	register,
	getPlaceholderClass,
	getErrorClass,
	errors,
}) => {
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.inputContainer}>
			{['firstName', 'lastName', 'email', 'phone', 'message'].map(field => (
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
	)
}
