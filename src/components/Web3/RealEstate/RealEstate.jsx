import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import imageCity01 from '../../../assets/web3/img/businessDomains/01.png'
import imageCity02 from '../../../assets/web3/img/businessDomains/02.png'
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'
import { subtitleRealEState, titleRealEState } from '../../Util/Web3/dataWeb3'

export const RealEstate = () => {
	const [isVisible, setIsVisible] = useState(false)
	const estateRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries
				if (entry.isIntersecting) {
					setIsVisible(true)
				} else if (entry.boundingClientRect.top > 0) {
					setIsVisible(false)
				}
			},
			{ threshold: 0.5 } // Элемент должен быть видим хотя бы на 50%
		)

		if (estateRef.current) observer.observe(estateRef.current)

		return () => {
			if (estateRef.current) observer.unobserve(estateRef.current)
		}
	}, [])

	return (
		<section className={styles.real__estate_section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain
					title={titleRealEState}
					subTitle={subtitleRealEState}
				/>
				<BtnBlockchain />
			</div>
			<div ref={estateRef} className={styles.real__estate_bg}>
				{/* Левая картинка */}
				<motion.img
					initial={{ x: -200, opacity: 0 }}
					animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
					transition={{ type: 'spring', duration: 1 }} //
					src={imageCity01}
					alt='city'
					className={styles.cityImage}
				/>
				{/* Правая картинка */}
				<motion.img
					initial={{ x: 200, opacity: 0 }}
					animate={isVisible ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
					transition={{ type: 'spring', duration: 1 }}
					src={imageCity02}
					alt='city'
					className={styles.cityImage}
				/>
			</div>
		</section>
	)
}
