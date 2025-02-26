/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {
	listTextFinalLaunchProcessFollow,
	listTextRequirementProcessFollow,
	listTextResearchProcessFollow,
	listTextResourcesProcessFollow,
	listTextTestingProcessFollow,
	listTitleFinalLaunchProcessFollow,
	listTitleRequirementProcessFollow,
	listTitleResearchProcessFollow,
	listTitleResourcesProcessFollow,
	listTitleTestingProcessFollow,
} from '../../Util/Service/ChatBot/data'
import { CardProcessFlow } from './CardProcessFlow'

export const ProcessFlowList = ({ styles }) => {
	return (
		<div className={styles.process__flow_list_row}>
			<div className={styles.process__flow_list_item}>
				<CardProcessFlow
					styles={styles}
					title={listTitleRequirementProcessFollow}
					text={listTextRequirementProcessFollow}
				/>
				<CardProcessFlow
					styles={styles}
					title={listTitleResourcesProcessFollow}
					text={listTextResourcesProcessFollow}
				/>
				<CardProcessFlow
					styles={styles}
					title={listTitleFinalLaunchProcessFollow}
					text={listTextFinalLaunchProcessFollow}
				/>
			</div>
			<div className={styles.process__flow_list_item}>
				<CardProcessFlow
					styles={styles}
					title={listTitleResearchProcessFollow}
					text={listTextResearchProcessFollow}
				/>
				<CardProcessFlow
					styles={styles}
					title={listTitleTestingProcessFollow}
					text={listTextTestingProcessFollow}
				/>
			</div>
		</div>
	)
}
