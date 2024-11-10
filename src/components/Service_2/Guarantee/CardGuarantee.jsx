/* eslint-disable react/prop-types */
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'

export const CardGuarantee = ({ image, title, text }) => {
	return (
		<div className={iosStyles.guarantee__card}>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
