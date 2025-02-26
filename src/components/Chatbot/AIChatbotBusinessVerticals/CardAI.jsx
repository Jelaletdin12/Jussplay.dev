/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export const CardAI = ({ cardTitle, cardText, cardImage, styles }) => {
	return (
		<div className={styles.card_ai}>
			<img src={cardImage} alt={cardTitle} />
			<div className={styles.card_ai_content}>
				<h1>{cardTitle}</h1>
				<p>{cardText}</p>
			</div>
		</div>
	)
}
