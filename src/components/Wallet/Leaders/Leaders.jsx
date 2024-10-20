import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import walletStyle from '../../../pages/Wallet/wallet.module.scss'
import {
	subTitleMultiCurrencyWallet,
	titleMultiCurrencyWallet,
} from '../../Util/Wallet/dataWallet'
import { PlatformWallet } from '../ui/PlatformWallet'
import styles from './leaders.module.scss'

export const Leaders = () => {
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

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	return (
		<section className={walletStyle.wallet__section} ref={sectionRef}>
			<div className={blockchainStyle.blockchainContainer}>
				<div className={styles.leaders__content}>
					<div className={styles.leaders__item}>
						<h1>
							{startCount && <CountUp end={200} duration={4} />} <span>+</span>
						</h1>
						<h2>Clients Worldwide</h2>
					</div>
					<div className={styles.leaders__item}>
						<h1>
							{startCount && (
								<CountUp end={500} duration={5} prefix='$' suffix='M+' />
							)}
						</h1>
						<h2>Capital Raised</h2>
					</div>
					<div className={styles.leaders__item}>
						<h1>
							{startCount && <CountUp end={15} duration={2} />}
							<span>+</span>
						</h1>
						<h2>Largest Countries</h2>
					</div>
				</div>
				<PlatformWallet title={titleMultiCurrencyWallet}>
					<p>{subTitleMultiCurrencyWallet}</p>
				</PlatformWallet>
			</div>
		</section>
	)
}
