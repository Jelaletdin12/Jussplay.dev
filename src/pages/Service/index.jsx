/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { HashLink } from 'react-router-hash-link'
import bg3 from '../../assets/bg3.png'
import right from '../../assets/img1.png'
import left from '../../assets/img2.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import transition from '../../pageTransition'
import styles from './service.module.scss'
// import bg4 from '../../assets/bg4.png';

const Service = () => {
	const [isAnimatingBg, setIsAnimatingBg] = useState(false)
	const ServiceCard = ({ title, description, details }) => (
		<div className={styles.serviceCard}>
			<h3 className={styles.serviceTitle}>{title}</h3>
			<p className={styles.serviceDescription}>{description}</p>
			<p className={styles.serviceDetails}>{details}</p>
		</div>
	)

	useEffect(() => {
		setTimeout(() => {
			setIsAnimatingBg(true)
		}, 500)
	}, [])

	return (
		<>
			<Header />
			<section className={styles.service}>
				<div className={styles.up}>
					<div className={styles.bg}>
						<motion.img
							initial={{ opacity: 0, scale: 0, y: '-100vh', x: '-100vh' }}
							animate={
								isAnimatingBg ? { opacity: 2, scale: 1, y: 0, x: 0 } : {}
							}
							transition={{ duration: 1, ease: 'easeInOut' }}
							src={left}
							alt='left image'
						/>
						<motion.img
							initial={{ opacity: 0, scale: 0, y: '-100vh', x: '100vh' }}
							animate={
								isAnimatingBg ? { opacity: 2, scale: 1, y: 0, x: 0 } : {}
							}
							transition={{ duration: 1, ease: 'easeInOut' }}
							src={right}
							alt='right image'
						/>
					</div>
					<header className={styles.header}>
						<h1 className={styles.title}>
							Implement your <br /> ideas with Jussplay.dev
						</h1>
					</header>
					<div className={styles.content}>
						<HashLink to={'#startJourney'} smooth>
							<button className={styles.button}>
								Meet with us <IoIosArrowForward />
							</button>
						</HashLink>
					</div>
				</div>

				<div className={styles.pageContainer} id='startJourney'>
					<section className={styles.journeySection}>
						<h2>
							Start your journey <br /> with us
						</h2>
					</section>
					<section
						className={styles.chooseSection}
						style={{
							position: 'relative',
							zIndex: '1',
							top: '250px',
							left: '85%',
						}}
					>
						<h2 className={styles.sectionTitle}>
							Just choose <br /> what you need
						</h2>
					</section>
					<section className={styles.servicesSection}>
						<h2 className={styles.sectionTitle}>Our services</h2>
						<div className={styles.servicesList}>
							<ServiceCard
								title='Android app development'
								description='We develop Android applications using Java or Kotlin, ensuring compatibility across a wide range of devices for a seamless user experience.'
								details='SOCIAL NETWORKING APPS, E-COMMERCE APPS, AND UTILITY APPS LIKE WEATHER OR FITNESS TRACKERS'
							/>
							<ServiceCard
								title='Web/App Development'
								description='We build responsive, user-friendly websites and web applications, handling both front-end and back-end development.'
								details='LANDING PAGES, E-COMMERCE WEBSITES, AND ONLINE BOOKING PLATFORMS'
							/>
							<ServiceCard
								title='AI (Artificial Intelligence)'
								description='We design AI systems that enhance automation, data analysis, and user experiences through intelligent decision-making and pattern recognition'
								details='AI recommendation engines, predictive analytics for finance, and smart home assistants'
							/>
							<ServiceCard
								title='Web3 Game Development'
								description='We develop blockchain-based games with decentralized ownership, NFTs, and play-to-earn mechanics to enhance player engagement'
								details='NFT collectible games, decentralized virtual worlds, and blockchain-enabled play-to-earn games.'
							/>
							<ServiceCard
								title='UX/UI Design'
								description='We design user-friendly and visually appealing interfaces for websites, apps, and digital products, ensuring a seamless user experience'
								details='Mobile app interfaces, website layouts, and dashboards'
							/>
							<ServiceCard
								title='Motion Design'
								description='We bring visuals to life with engaging animations and motion graphics, adding dynamism to your brand’s storytelling'
								details='Animated logos, explainer videos, and UI animations'
							/>
							<ServiceCard
								title='SMM (Social Media Marketing)'
								description='We boost your brand’s visibility on social media through targeted content creation, ad campaigns, and audience engagement'
								details='Instagram content creation, Facebook ad campaigns, and Twitter community management'
							/>
						</div>
						<div className={styles.servicesList}>
							<ServiceCard
								title='IOS app development'
								description='We create high-performance, secure apps for Apple devices using Swift or Objective-C, fully integrated within the Apple ecosystem.'
								details='MOBILE BANKING APPS, HEALTH AND WELLNESS APPS, AND CUSTOM ENTERPRISE APPS'
							/>
							<ServiceCard
								title='Machine Learning'
								description='We implement machine learning solutions that improve predictions and decisions by training algorithms on relevant data'
								details='Email spam filters, e-commerce product recommendations, and predictive maintenance systems'
							/>

							<ServiceCard
								title='Chatbot Development'
								description='We develop AI-powered chatbots that automate customer service, provide information, and enhance user engagement.'
								details='CUSTOMER SERVICE BOTS, BOOKING ASSISTANTS, AND VIRTUAL BANKING ASSISTANTS'
							/>
							<ServiceCard
								title='Built-in System'
								description='We integrate specialized software and hardware solutions within larger systems, enhancing functionality and efficiency'
								details='Systems in smart home devices, vehicle infotainment systems, and industrial automation controllers'
							/>
							<ServiceCard
								title='Crypto Exchange/Crypto Wallet/Crypto Token'
								description='We create secure platforms for trading, storing, and managing cryptocurrencies, along with developing custom tokens on blockchains'
								details='Centralized and decentralized exchanges, mobile crypto wallets, and tokens for DeFi projects'
							/>
							<ServiceCard
								title='Graphic Design'
								description='Our team creates impactful visual content, including logos, branding materials, and social media graphics, to effectively communicate your message'
								details='Logos, brochures, posters, and packaging design'
							/>
							<ServiceCard
								title='Copywriting Services'
								description='We provide custom copywriting services tailored to your needs. Whether you need compelling website content, app descriptions, or company profiles, we craft clear and engaging texts that resonate with your audience and strengthen your brand'
								details='Website copy, app descriptions, company bios, and marketing content'
							/>
						</div>
						<div className={styles.canvas}>
							<img src={bg3} alt='' />
							{/* <img src={bg4} alt="" /> */}
							{/* <CanvasAnimation /> */}
							{/* <ParticleComponent/> */}
						</div>
					</section>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default transition(Service)
