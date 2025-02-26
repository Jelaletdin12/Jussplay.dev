// Styles
import blockchainStyle from '../Blockchain/blockchain.module.scss'
import styles from './chat-bot.module.scss'
// Assets
import bg from '../../assets/oval.png'
// Components
import { AIChatbotBusinessVerticals } from '../../components/Chatbot/AIChatbotBusinessVerticals/AIChatbotBusinessVerticals'
import { AIChatbotServiceOffer } from '../../components/Chatbot/AiChatbotServiceOffer/AIChatbotServiceOffer'
import { AIChatbotSolution } from '../../components/Chatbot/AIChatbotSolution/AIChatbotSolution'
import { AIRisingMax } from '../../components/Chatbot/AIRisingMax/AIRisingMax'
import { BusinessCustomersInteractions } from '../../components/Chatbot/BusinessCustomersInteractions/BusinessCustomersInteractions'
import { BusinessesNeedAI } from '../../components/Chatbot/BusinessesNeedAI/BusinessesNeedAI'
import { ProcessFlow } from '../../components/Chatbot/ProcessFlow/ProcessFlow'
import { HeaderServicePages } from '../../components/commonService/HeaderServicePages'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import {
	cardsAIChatbotBusinessVerticals,
	cardsAIChatbotOffer,
	imageBusinessCustomers,
	imageBusinessesAIChatbot,
	imageIntelligentConversational,
	imageProcessFollow,
	textAIChatbotBusinessVerticals,
	textAIChatbotOffer,
	textBusinessCustomersInteractions,
	textBusinessesNeedAI,
	textChatbotRisingMax,
	textHeaderService,
	textIntelligentConversational,
	textProcessFollow,
	titleAIChatbotBusinessVerticals,
	titleAIChatbotOffer,
	titleBusinessCustomersInteractions,
	titleBusinessesNeedAI,
	titleChatbotRisingMax,
	titleHeaderService,
	titleIntelligentConversational,
	titleProcessFollow,
} from '../../components/Util/Service/ChatBot/data'
import transition from '../../pageTransition'

const ChatBot = () => {
	return (
		<CustomScroll>
			<div className={blockchainStyle.page__blockchain}>
				<Header />
				<HeaderServicePages
					image={bg}
					title={titleHeaderService}
					text={textHeaderService}
				/>
				<main className={styles.main}>
					<BusinessesNeedAI
						title={titleBusinessesNeedAI}
						text={textBusinessesNeedAI}
						image={imageBusinessesAIChatbot}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<AIChatbotServiceOffer
						title={titleAIChatbotOffer}
						text={textAIChatbotOffer}
						styles={styles}
						blockchainStyle={blockchainStyle}
						cards={cardsAIChatbotOffer}
					/>
					<AIChatbotSolution
						title={titleIntelligentConversational}
						text={textIntelligentConversational}
						styles={styles}
						blockchainStyle={blockchainStyle}
						image={imageIntelligentConversational}
					/>
					<AIChatbotBusinessVerticals
						title={titleAIChatbotBusinessVerticals}
						text={textAIChatbotBusinessVerticals}
						cards={cardsAIChatbotBusinessVerticals}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<BusinessCustomersInteractions
						title={titleBusinessCustomersInteractions}
						text={textBusinessCustomersInteractions}
						image={imageBusinessCustomers}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<ProcessFlow
						title={titleProcessFollow}
						text={textProcessFollow}
						image={imageProcessFollow}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
					<AIRisingMax
						title={titleChatbotRisingMax}
						text={textChatbotRisingMax}
						styles={styles}
						blockchainStyle={blockchainStyle}
					/>
				</main>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(ChatBot)
