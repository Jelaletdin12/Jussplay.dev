/* eslint-disable react/prop-types */
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'

export const CardMaking = ({ image, title, text }) => {
	return (
		<div className={iosStyles.making__card}>
			<img src={image} alt={title} />
			<div className={iosStyles.making__card_content}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}
