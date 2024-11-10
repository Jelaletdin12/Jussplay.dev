import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
import {
	countIosAchievementsDeveloped,
	countIosAchievementsDownloads,
	countIosAchievementsExperts,
	countIosAchievementsServed,
	titleIosAchievementsDeveloped,
	titleIosAchievementsDownloads,
	titleIosAchievementsExperts,
	titleIosAchievementsServed,
} from '../../Util/Service/IOS/data'
import stylesLoaders from '../../Wallet/Leaders/leaders.module.scss'

export const IosAppAchievements = () => {
	const [startCount, setStartCount] = useState(false)
	const sectionRef = useRef(null)
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setStartCount(true)
						observer.disconnect()
					}
				})
			},
			{
				threshold: 0.5,
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}
	}, [])

	return (
		<section className={iosStyles.ios__section} ref={sectionRef}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={stylesLoaders.leaders__content}>
					<div className={stylesLoaders.leaders__item}>
						<h1>
							{startCount && (
								<CountUp end={countIosAchievementsDeveloped} duration={2} />
							)}{' '}
							<span>+</span>
						</h1>
						<h2>{titleIosAchievementsDeveloped}</h2>
					</div>
					<div className={stylesLoaders.leaders__item}>
						<h1>
							{startCount && (
								<CountUp
									end={countIosAchievementsDownloads}
									duration={5}
									suffix='M+'
								/>
							)}
						</h1>
						<h2>{titleIosAchievementsDownloads}</h2>
					</div>
					<div className={stylesLoaders.leaders__item}>
						<h1>
							{startCount && (
								<CountUp end={countIosAchievementsExperts} duration={4} />
							)}
							<span>+</span>
						</h1>
						<h2>{titleIosAchievementsExperts}</h2>
					</div>
					<div className={stylesLoaders.leaders__item}>
						<h1>
							{startCount && (
								<CountUp end={countIosAchievementsServed} duration={3} />
							)}
							<span>+</span>
						</h1>
						<h2>{titleIosAchievementsServed}</h2>
					</div>
				</div>
			</div>
		</section>
	)
}
