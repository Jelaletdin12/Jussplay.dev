// Styles
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Utils
import { serviceListIosConsulting } from '../../Util/Service/IOS/data'
export const IosList = () => {
	return (
		<div className={iosStyles.ios__about_list}>
			<ul>
				{serviceListIosConsulting.map(list => (
					<li key={list.id}>{list.title}</li>
				))}
			</ul>
		</div>
	)
}
