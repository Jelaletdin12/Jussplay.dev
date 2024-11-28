import CountUp from 'react-countup'
import { IoIosArrowForward } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
import Rectangle from '../../assets/Service_1/Rectangle.png'
import styles from './AndroidStatsComponent.module.scss'

const statsData = [
	{
		end: 4000,
		suffix: '+',
		description: 'Android App Developed Successfully',
		duration: 3,
	},
	{
		end: 10,
		suffix: 'M+',
		description: 'Android Apps Downloads',
		duration: 3.5,
	},
	{ end: 250, suffix: '+', description: 'Technology Experts', duration: 2.5 },
	{ end: 15, suffix: '+', description: 'Industries Served', duration: 2 },
]

const AndroidStatsComponent = () => {
	const [statsRef, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	})

	const renderStats = () =>
		statsData.map((stat, index) => (
			<div className={styles.statItem} key={index}>
				<h2>
					{inView && (
						<CountUp
							start={0}
							end={stat.end}
							duration={stat.duration}
							separator=','
						/>
					)}
					{stat.suffix}
				</h2>
				<p>{stat.description}</p>
			</div>
		))

	return (
		<div className={styles.container}>
			<div className={styles.stats} ref={statsRef}>
				{renderStats()}
			</div>
			<section className={styles.infoSection}>
				<div className={styles.infoSection_content}>
					<h2>Why Develop An Android App?</h2>
					<p>
						Android OS is the clear leader in the mobile application market,
						with a market share of over 86% in application development. Thus,
						Android is the ideal platform for reaching users worldwide with your
						app. At RisingMax, our expertise lies in the Android platform,
						enabling us to develop tailored apps that perfectly align with your
						requirements. Our Android app development services are designed to
						enhance brand engagement and foster loyalty. We achieve this by
						leveraging advanced technology, incorporating user-centric features,
						and following intuitive design principles.
					</p>
					<button className={styles.meetButton}>
						Meet with us <IoIosArrowForward />
					</button>
				</div>
				<div className={styles.infoSection_img}>
					<img src={Rectangle} alt='Why Develop Android App' />
				</div>
			</section>
		</div>
	)
}

export default AndroidStatsComponent
