/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './flipBtn.module.scss'

export default function FlipButton({
	insideText,
	bgColor,
	border,
	textColor,
	onClick,
	isDownload,
	href,
}) {
	return (
		<a
			style={{
				backgroundColor: bgColor,
				color: textColor,
			}}
			download
			href={href}
			className={`${styles.btnFlip}  `}
			data-back={insideText}
			data-front={insideText}
			data-text-color={'#000'}
			onClick={onClick}
		></a>
	)
}
