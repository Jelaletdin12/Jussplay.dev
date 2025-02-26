/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const CardAIRisingMax = ({ styles, image, title, text }) => {
	return (
		<div className={styles.chat_bot__rising_max_card}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
