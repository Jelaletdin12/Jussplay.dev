import { Form } from '../Blockchain/Form'
import { BtnBlockchain } from '../Button/Blockchain/BtnBlockchain'
import style from './headerServicePages.module.scss'

export const HeaderServicePages = ({ image, title, text }) => {
	return (
		<div className={style.header__service_container}>
			<div className={style.header__service}>
				<div className={style.header__service_bg}>
					<img src={image} alt={title} />
				</div>
				<div className={style.header__service_content}>
					<h2>{title}</h2>
					<p>{text}</p>
					<BtnBlockchain />
				</div>
				<Form />
			</div>
		</div>
	)
}
