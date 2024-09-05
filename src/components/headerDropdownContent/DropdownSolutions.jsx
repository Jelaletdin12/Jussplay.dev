import restaurant from '../../assets/solutions/restaurant-managment-icon.svg'
import cryptaBank from '../../assets/solutions/crypto-banking-icon.svg'
import cryptoExch from '../../assets/solutions/crypto-exchange-solution-icon.svg'
import healthcare from '../../assets/solutions/home-healthcare-icon.svg'
import loyalty from '../../assets/solutions/loyalty-program-icon.svg'
import multiCurr from '../../assets/solutions/multi-currency-wallet-icon.svg'
import ottPlat from '../../assets/solutions/ott-platform-icon.svg'
import realEstate from '../../assets/solutions/real-estate-management.svg'
import supChain from '../../assets/solutions/supply-chain-icon.svg'
import taxiBook from '../../assets/solutions/taxi-booking-icon.svg'
import schoolMan from '../../assets/solutions/school-managment-icon.svg'

import { PiTriangleFill } from 'react-icons/pi'

import styles from './dropdown.module.scss' // Assume you have appropriate CSS
export const DropdownSolutions = () => {
	return (
		<div className={styles.dropdown} style={{ left: '-900%' }}>
			<PiTriangleFill />
			<ul style={{ padding: '15px', alignItems: 'flex-start' }}>
				<li>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={restaurant} alt='' />
						</div>
						<div>
							<h6>Restaurant Management</h6>
							<p>
								Get the high-end restaurant management application for your
								business.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={realEstate} alt='' />
						</div>
						<div>
							<h6>Real Estate Management</h6>
							<p>
								Handle your business with a reliable real estate management app.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={loyalty} alt='' />
						</div>
						<div>
							<h6>Loyalty Program Software</h6>
							<p>Build a top-notch business solution to excel in the market.</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={cryptaBank} alt='' />
						</div>
						<div>
							<h6>Crypto Banking Solution</h6>
							<p>
								Get into the decentralized system with high-end crypto banking
								solution.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={taxiBook} alt='' />
						</div>
						<div>
							<h6>Taxi Booking App</h6>
							<p>Get a taxi booking app with advanced features and UI/UX.</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={supChain} alt='' />
						</div>
						<div>
							<h6>Supplychain Management</h6>
							<p>
								Run and manage your business with advanced supplychain
								management software.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={schoolMan} alt='' />
						</div>
						<div>
							<h6>Scool Management Software</h6>
							<p>
								Build one-stop solution with advanced features and security of
								data.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={healthcare} alt='' />
						</div>
						<div>
							<h6>Home Health Care Solution</h6>
							<p>
								Get an advanced home healthcare solution to serve the patient
								with advanced technology.
							</p>
						</div>
					</div>
				</li>
				<li>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={ottPlat} alt='' />
						</div>
						<div>
							<h6>OTT Platform Development</h6>
							<p>
								Get take your OTT business to the global platform with us and
								generate revenue.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={cryptoExch} alt='' />
						</div>
						<div>
							<h6>Crypto Exchange Software</h6>
							<p>
								Get into the world of decentralization with high end crypto
								exchange software.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<div>
							<img src={multiCurr} alt='' />
						</div>
						<div>
							<h6>eWallet App Development</h6>
							<p>
								Develop a user friendly and advanced eWallet app platform with
								excellence.
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	)
}
