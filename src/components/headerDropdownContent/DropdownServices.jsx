import { PiTriangleFill } from 'react-icons/pi'
import styles from './dropdown.module.scss' // Assume you have appropriate CSS

// Import Icons Service
import ai_developmet from '../../assets/service/ai-development-icon.svg'
import android from '../../assets/service/android-icon.svg'
import ar_vr from '../../assets/service/ar-vr-icon.svg'
import ai from '../../assets/service/artificial-intelligence-icon.svg'
import bigdata from '../../assets/service/big-data-icon.svg'
import blockchain from '../../assets/service/blockchain-icon.svg'
import chainTest from '../../assets/service/blockchain-testing-icon.svg'
import chatBot from '../../assets/service/chat-bot-development-icon.svg'
import cloud from '../../assets/service/cloud-consulting.svg'
import cms from '../../assets/service/cms-erp-icon.svg'
import ios from '../../assets/service/ios-icon.svg'
import iot from '../../assets/service/iot-icon.svg'
import machineLearn from '../../assets/service/machine-learning-icon.svg'
import progWeb from '../../assets/service/progressive-web-app-icon.svg'
import python from '../../assets/service/python-icon.svg'
import qa from '../../assets/service/qa-testing-icon.svg'
import reactNat from '../../assets/service/react-native-app-icon.svg'
import soft from '../../assets/service/software-development-icon.svg'
import staff from '../../assets/service/staff-augmentation-icon.svg'
import web3 from '../../assets/service/web3-testing-icon.svg'

export const DropdownServices = () => {
	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown__left}>
				<PiTriangleFill />
				<ul>
					<li>
						<div className={styles.dropdown__header}>
							<h4>Mobile App Development</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={android} alt='' />
							</div>
							<div>
								<h6>Anddroid App</h6>
								<p>Build native mobile apps for unmatched user experience.</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ios} alt='' />
							</div>
							<div>
								<h6>Ios App App</h6>
								<p>
									Develop reliable and dynamic iOS Apps for iPhone &amp; iPad.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ar_vr} alt='' />
							</div>
							<div>
								<h6>AR/VR App</h6>
								<p>
									Create near to REALITY AR/VR, 3D, &amp; Mixed reality
									applications.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={iot} alt='' />
							</div>
							<div>
								<h6>IoT App Development</h6>
								<p>
									Improve business efficiency with high-performance IoT apps.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.dropdown__header}>
							<h4>Web Development</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={progWeb} alt='' />
							</div>
							<div>
								<h6>Progressive Web app</h6>
								<p>
									Build feature-rich PWAs that act like native apps ensure 100%
									success.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={reactNat} alt='' />
							</div>
							<div>
								<h6>Rreact Native Web App</h6>
								<p>
									Create multi-platform mobile applications with a single code.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={cms} alt='' />
							</div>
							<div>
								<h6> CMS/CRM/ERP App</h6>
								<p>
									Offer unique web experience with CMS/CRM/ERP Applications.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={cloud} alt='' />
							</div>
							<div>
								<h6>Cloud Technology Consulting</h6>
								<p>
									Speed up cloud adoption plan and explore new growth
									opportunities.
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className={styles.dropdown__header}>
							<h4>Custom Solutions</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={soft} alt='' />
							</div>
							<div>
								<h6>Software developmet</h6>
								<p>Derive growth new opportunities with custom software.</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ai_developmet} alt='' />
							</div>
							<div>
								<h6>AI Developmet</h6>
								<p>Automate complex business operations with AI software.</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={chatBot} alt='' />
							</div>
							<div>
								<h6>ChatBot Developmet</h6>
								<p>
									Employ AI chatbot to engage and derive meaningful
									interactions.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={staff} alt='' />
							</div>
							<div>
								<h6>Staff Augmentation</h6>
								<p>
									Fill the gaps within your IT team and scale up your business.
								</p>
							</div>
						</div>
					</li>
				</ul>
				<div className={styles.dropdown__leftBottom}>
					<div className={styles.dropdown__wrap}>
						<img src={qa} alt='' />
						<div>
							<h4>QA & Testing</h4>
							<p>
								End-to-end QA testing services to detect bugs and technical
								issues.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<img src={web3} alt='' />
						<div>
							<h4>Web3 Testing</h4>
							<p>
								Test your web3 application to avoid app failure and enhance
								security.
							</p>
						</div>
					</div>
					<div className={styles.dropdown__wrap}>
						<img src={chainTest} alt='' />
						<div>
							<h4>Blockchain Testing</h4>
							<p>
								Functional, API, performance, node, security, and other testing
								services.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.dropdown__right}>
				<ul>
					<li>
						<div className={styles.dropdown__header}>
							<h4>Technologies</h4>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={bigdata} alt='' />
							</div>
							<div>
								<h6>Big Data</h6>
								<p>
									Resolve complex data challenges and unlock your business
									value.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={machineLearn} alt='' />
							</div>
							<div>
								<h6>Machine Learning</h6>
								<p>
									Scale up business &amp; tackle complex challenges with ML.
								</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={ai} alt='' />
							</div>
							<div>
								<h6>Artificial Intelligence</h6>
								<a href=''>Generative AI</a>
								<br />
								<a href=''>Computer Vision</a>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={blockchain} alt='' />
							</div>
							<div>
								<h6>Blockchain</h6>
								<p>Build dApps, smart contracts, crypto wallets.</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={python} alt='' />
							</div>
							<div>
								<h6>Python</h6>
								<p>Develop apps on Python frameworks like Flask, Web2py.</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
