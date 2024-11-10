// Styles
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Utils
import {
	subListServiceIosContent,
	subTitleServiceIosContent,
	titleServiceIosContent,
} from '../../Util/Service/IOS/data'

export const IosListAbout = () => {
	return (
		<div className={iosStyles.ios__about_list__about}>
			<h1>{titleServiceIosContent}</h1>
			<p>{subTitleServiceIosContent}</p>
			<ul>
				{subListServiceIosContent.map(subList => (
					<li key={subList.id}>{subList.title}</li>
				))}
			</ul>
		</div>
	)
}
