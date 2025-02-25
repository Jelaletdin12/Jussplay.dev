// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './chat-bot.module.scss'
// Assets
import bg from '../../assets/oval.png'
// Components
import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'

const ChatBot = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderServicePages image={bg} title={'Test'} text={'text'} />
				<main className={styles.main__ios}></main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(ChatBot)
