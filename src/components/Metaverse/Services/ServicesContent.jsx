import styles from '../../../pages/Metaverse/metaverse.module.scss'
import { itemServiceLeft, itemServiceRight } from '../../Util/contentMetaverse'
import { ServiceItem } from './ServiceItem'

export const ServiceContent = () => {
	return (
		<div className={styles.service__row}>
			<div className={styles.service__col}>
				{itemServiceLeft.map(item => (
					<ServiceItem
						key={item.id}
						title={item.title}
						text={item.text}
						image={item.image}
						style={item.style}
					/>
				))}
			</div>
			<div className={styles.service__col}>
				{itemServiceRight.map(item => (
					<ServiceItem
						key={item.id}
						title={item.title}
						text={item.text}
						image={item.image}
						style={item.style}
					/>
				))}
			</div>
		</div>
	)
}
