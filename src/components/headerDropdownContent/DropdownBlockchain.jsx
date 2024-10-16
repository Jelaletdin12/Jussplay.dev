import { PiTriangleFill } from 'react-icons/pi'
import styles from './dropdown.module.scss' // Assume you have appropriate CSS

import { Link } from 'react-router-dom'
import cardano from '../../assets/blockchain/cardano-icon.svg'
import cryptoEx from '../../assets/blockchain/crypto-exchange-icon.svg'
import cryptoWallet from '../../assets/blockchain/crypto-wallet-icon.svg'
import ethereum from '../../assets/blockchain/ethereum-icon.svg'
import hyperledger from '../../assets/blockchain/hyperledger-icon.svg'
import metaverse from '../../assets/blockchain/metaverse-development-icon.svg'
import nftGame from '../../assets/blockchain/nft-game-icon.svg'
import nftToken from '../../assets/blockchain/nft-token-icon.svg'
import polygon from '../../assets/blockchain/polygon-icon.svg'
import ripple from '../../assets/blockchain/ripple-icon.svg'
import solana from '../../assets/blockchain/solana-icon.svg'
import stellar from '../../assets/blockchain/stellar-icon.svg'
import webDev from '../../assets/blockchain/web3-development-icon.svg'
import webGame from '../../assets/blockchain/web3-game-icon.svg'
import chainTest from '../../assets/service/blockchain-testing-icon.svg'

export const DropdownBlockchain = () => {
	return (
		<div className={styles.dropdown} style={{ width: '900px', left: '-600%' }}>
			<div className={styles.dropdown__left} style={{ width: '60%' }}>
				<div className={styles.dropdown__header} style={{ padding: '13px' }}>
					<h4>BLockchain Development Services</h4>
				</div>
				<ul>
					<li>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={nftGame} alt='' />
							</div>
							<Link to={'/blockchain'}>
								<div>
									<h6>NFT Game Development</h6>
									<p>Rule the next gaming era with our NFT game solution.</p>
								</div>
							</Link>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={nftToken} alt='' />
							</div>
							<Link to='/token'>
								<div>
									<h6>NFT Token Development</h6>
									<p>
										Launch NFT tokens on Ethereum, Binance, Solana, and others.
									</p>
								</div>
							</Link>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={metaverse} alt='' />
							</div>
							<Link to='/metaverse'>
								<div>
									<h6>Metaverse Development</h6>
									<p>
										Empowering startups and enterprises to strengthen their
										footprint.
									</p>
								</div>
							</Link>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={webGame} alt='' />
							</div>
							<Link to='/blockchain_4'>
								<div>
									<h6>Web3 Game Development</h6>
									<p>Launch P2E, M2E, NFT cards &amp; immersive web3 games.</p>
								</div>
							</Link>
						</div>
					</li>
					<li>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={cryptoEx} alt='' />
							</div>
							<div>
								<h6>Crypto Exchange Development</h6>
								<p>Unlock new revenue stream with crypto exchange software.</p>
							</div>
						</div>
						<div className={styles.dropdown__wrap}>
							<div>
								<img src={cryptoWallet} alt='' />
							</div>
							<div>
								<h6>Crypto Wallet Development</h6>
								<p>Build web, mobile, and desktop multi-currency wallets.</p>
							</div>
						</div>
						<Link to={'/web3'}>
							<div className={styles.dropdown__wrap}>
								<div>
									<img src={webDev} alt='' />
								</div>
								<div>
									<h6>Web3 Game Development</h6>
									<p>
										Transform your business with our high-end web3 project
										development.
									</p>
								</div>
							</div>
						</Link>
					</li>
				</ul>
				<div className={styles.dropdown__leftBottom}>
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
			<div className={styles.dropdown__right} style={{ width: '40%' }}>
				<PiTriangleFill />
				<div className={styles.dropdown__header}>
					<h4>Blockchain Networks</h4>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={ethereum} alt='' />
					</div>
					<div>
						<h6>Ethereum</h6>
					</div>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={solana} alt='' />
					</div>
					<div>
						<h6>Solana</h6>
					</div>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={cardano} alt='' />
					</div>
					<div>
						<h6>Cardano</h6>
					</div>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={stellar} alt='' />
					</div>
					<div>
						<h6>Stellar</h6>
					</div>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={polygon} alt='' />
					</div>
					<div>
						<h6>Polygon</h6>
					</div>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={hyperledger} alt='' />
					</div>
					<div>
						<h6>Hyperledger</h6>
					</div>
				</div>
				<div className={styles.dropdown__wrap}>
					<div>
						<img src={ripple} alt='' />
					</div>
					<div>
						<h6>Ripple</h6>
					</div>
				</div>
			</div>
		</div>
	)
}
