import { useEffect, useRef, useState } from 'react'
import image from '../../../assets/web3/img/strategy/01.jpg'
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import styles from '../../../pages/Web3/web3.module.scss'
import { BtnBlockchain } from '../../Button/Blockchain/BtnBlockchain'
import { titleStrategy } from '../../Util/Web3/dataWeb3'

export const Strategy = () => {
	const [activeItems, setActiveItems] = useState({
		line: false,
		image: false,
	})

	const lineRef = useRef(null)
	const imageRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						if (entry.target === lineRef.current) {
							setActiveItems(prev => ({ ...prev, line: true }))
						}
						if (entry.target === imageRef.current) {
							setActiveItems(prev => ({ ...prev, image: true }))
						}
					} else if (entry.boundingClientRect.top > 0) {
						if (entry.target === lineRef.current) {
							setActiveItems(prev => ({ ...prev, line: false }))
						}
						if (entry.target === imageRef.current) {
							setActiveItems(prev => ({ ...prev, image: false }))
						}
					}
				})
			},
			{
				threshold: 0.5,
			}
		)

		if (lineRef.current) observer.observe(lineRef.current)
		if (imageRef.current) observer.observe(imageRef.current)

		return () => {
			if (lineRef.current) observer.unobserve(lineRef.current)
			if (imageRef.current) observer.unobserve(imageRef.current)
		}
	}, [])

	return (
		<section className={styles.strategy__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.strategy__row}>
					<div className={styles.strategy__item}>
						<TitleBlockchain title={titleStrategy} />
						<BtnBlockchain />
					</div>
					<div className={styles.strategy__item}>
						<div className={styles.strategy__item_sub__row}>
							<div
								ref={lineRef}
								className={
									activeItems.line
										? styles.strategy__item__line__active
										: styles.strategy__item__line
								}
							>
								<div
									ref={imageRef}
									className={`${styles.image__left} ${
										activeItems.image
											? styles.active
											: styles.strategy__item__image
									}`}
								>
									<img src={image} alt='' />
									<div className={styles.strategy__item__ellipse_left}></div>
								</div>
							</div>
							<div
								className={
									activeItems.line
										? styles.strategy__item__line__active
										: styles.strategy__item__line
								}
							>
								<div
									className={`${styles.image__right} ${
										activeItems.image
											? styles.active
											: styles.strategy__item__image
									}`}
								>
									<img src={image} alt='' />
									<div className={styles.strategy__item__ellipse_right}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
