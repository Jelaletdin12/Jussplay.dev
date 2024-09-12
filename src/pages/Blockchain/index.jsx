import bg from '../../assets/blockchain/01.png'
import { BlockchainContent } from '../../components/Blockchain/BlockchainContent'
import { HeaderBlockchain } from '../../components/Blockchain/HeaderBlockchain'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import styles from './blockchain.module.scss'

const Blockchain = () => {
	return (
		<CustomScroll>
			<div className={styles.page__blockchain}>
				<Header />
				<HeaderBlockchain />
				<BlockchainContent />
				<img className={styles.bgImg} src={bg} alt='' />
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Blockchain)
