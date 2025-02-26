/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const CardProcessFlow = ({ styles, title, text }) => {
	return (
		<div className={styles.process__flow_list_card}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
