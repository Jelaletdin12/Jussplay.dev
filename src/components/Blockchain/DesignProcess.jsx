/* eslint-disable react/prop-types */
// tools and library
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
// Icons
import chatIcon01 from '../../assets/blockchain/Design-Process/icons/chat01.svg'
import chatIcon02 from '../../assets/blockchain/Design-Process/icons/chat02.svg'
import chatIcon03 from '../../assets/blockchain/Design-Process/icons/chat03.svg'
import chatIcon04 from '../../assets/blockchain/Design-Process/icons/chat04.svg'
import chatIcon05 from '../../assets/blockchain/Design-Process/icons/chat05.svg'
import chatIcon06 from '../../assets/blockchain/Design-Process/icons/chat06.svg'
// Component
import styles from '../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../pages/Blockchain/TitleBlockchain'
import {
	subTitleNFTDesignProcess,
	titleNFTDesignProcess,
} from '../Util/dataBlockchainPage'

const Chat = ({
	title,
	text,
	icon,
	styleMotion,
	styleIcon,
	style,
	inView,
	isMobile,
}) => {
	return (
		<>
			{isMobile && (
				<motion.div
					className={styles.wrapper__chat}
					initial={{ x: 550, y: 300 }}
					animate={inView ? styleMotion : { x: 550, y: 300 }}
					transition={{ type: 'spring', duration: 0.9 }}
					style={style}
				>
					<div className={styles.chat}>
						<h1>{title}</h1>
						<p>{text}</p>
						<img src={icon} alt={title} style={styleIcon} />
					</div>
				</motion.div>
			)}
			<div className={styles.wrapper__chat_mobile} style={style}>
				<div className={styles.chat}>
					<h1>{title}</h1>
					<p>{text}</p>
					<img src={icon} alt={title} style={styleIcon} />
				</div>
			</div>
		</>
	)
}

export const DesignProcess = () => {
	const [inView, setInView] = useState(false)
	const [wasInView, setWasInView] = useState(false)
	const sectionRef = useRef(null)
	const [isMobile, setIsMobile] = useState(false)
	const [isLaptop, setIsLaptop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024)
			setIsLaptop(window.innerWidth <= 1280)
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true)
					setWasInView(true)
				} else if (entry.boundingClientRect.top > 0) {
					setInView(false)
					setWasInView(false)
				}
			},
			{
				threshold: 0.5,
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<section className={styles.section__design_process} ref={sectionRef}>
			<div className={styles.blockchainContainer}>
				<TitleBlockchain
					title={titleNFTDesignProcess}
					subTitle={subTitleNFTDesignProcess}
				/>
				<div className={styles.chat__block}>
					{/* Left Chat */}
					<Chat
						title={'Concept Creation'}
						text={`Based on the ideation process, we will create a unique concept for your NFT game before beginning the development process.`}
						icon={chatIcon01}
						styleMotion={{ y: 0, x: 0 }}
						style={{ backgroundColor: '#9149ed' }}
						styleIcon={{ bottom: '1px', right: '-8px' }}
						inView={!isMobile && (inView || wasInView)}
						isMobile={!isMobile}
					/>
					<Chat
						title={'Maintenance'}
						text={`Even after delivering a project, we keep tabs on the performance and fix any bugs or issues to ensure smooth operation.`}
						icon={chatIcon02}
						styleMotion={{ y: 300, x: -60 }}
						style={{ backgroundColor: '#D6938A' }}
						styleIcon={{ bottom: '1px', right: '-8px' }}
						inView={!isMobile && (inView || wasInView)}
						isMobile={!isMobile}
					/>
					<Chat
						title={'Pre-production'}
						text={`Based on your project requirements, our experts will brainstorm ideas, conduct market research and decide on the direction to take for your NFT game.`}
						icon={chatIcon03}
						styleMotion={!isMobile && { y: 600, x: 0 }}
						style={{ backgroundColor: '#FFD955' }}
						styleIcon={{ bottom: '1px', right: '-8px' }}
						inView={!isMobile && (inView || wasInView)}
						isMobile={!isMobile}
					/>
					{/* Right Chat */}
					<Chat
						title={'Launch'}
						text={`With our turnkey NFT game development services, we will ensure a seamless release of your NFT game on your desired platforms.`}
						icon={chatIcon04}
						styleMotion={{ y: 0, x: 800 }}
						style={{ backgroundColor: '#5845F8' }}
						styleIcon={{ bottom: '0px', left: '-9px' }}
						inView={!isMobile && (inView || wasInView)}
						isMobile={!isMobile}
					/>
					<Chat
						title={'Testing'}
						text={`Before we launch the final product for your consumers, we will ensure quality and seamless operation through thorough testing.`}
						icon={chatIcon05}
						styleMotion={{ y: 300, x: 1100 }}
						style={{ backgroundColor: '#A73B9F' }}
						styleIcon={{ bottom: '0px', left: '-9px' }}
						inView={!isMobile && (inView || wasInView)}
						isMobile={!isMobile}
					/>
					<Chat
						title={'Development'}
						text={`Using the latest tech stack, your preferred blockchain network and functionalities, we will begin the coding and development process.`}
						icon={chatIcon06}
						styleMotion={{ y: 600, x: 1150 }}
						style={{ backgroundColor: '#EA8348' }}
						styleIcon={{ bottom: '0px', left: '-9px' }}
						inView={!isMobile && (inView || wasInView)}
						isMobile={!isMobile}
					/>
				</div>
			</div>
		</section>
	)
}
