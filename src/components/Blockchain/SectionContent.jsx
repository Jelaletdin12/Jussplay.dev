import pvpGameDevImage from '../../assets/blockchain/02.png'
import p2EGameDevImage from '../../assets/blockchain/03.png'
import M2EGameDevImage from '../../assets/blockchain/04.png'
import Web3GameDevImage from '../../assets/blockchain/05.png'
import RPGameDevImage from '../../assets/blockchain/06.png'

import CryptoGameDevImage from '../../assets/blockchain/07.png'

import SectionBlockchain from './SectionBlockchain'

export const SectionContent = () => {
	return (
		<>
			<SectionBlockchain
				title='PVP Game Development'
				description='What could be better than a unique Play-to-Earn game developed with our expertise in PVP (Player vs. Player) game development? You will not only get an engaging and competitive multiplayer experience, leveraging our deep knowledge and skills, but also a captivating product that will retain players.
'
				imageSrc={pvpGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='P2E Game Development'
				description='Launch next-generation Play-to-Earn games where players can earn in-game assets or tokens. As part of the game, they are able to unlock new levels and achievements.
'
				imageSrc={p2EGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='M2E Game Development'
				description='Looking for something physical? Move-to-Earn games reward players for physical activity and achievements. With real-world actions, users can earn digital rewards.
'
				imageSrc={M2EGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='Web3 Game Development'
				description='With our team, you can create and customize games that integrate Web3 technology, allowing players to interact with blockchain networks and own unique digital assets.
'
				imageSrc={Web3GameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='RP Game Development'
				description='Bored with reality? We introduce you to immersive role-playing games, where players can not only earn but also trade assets, unlocking new gameplay experiences, narratives, and features.
'
				imageSrc={RPGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='Crypto Game Development'
				description='Looking for something cutting-edge? Realize the potential of crypto games where players can collect and trade digital tokens. Make your dreams come true by creating new opportunities for in-game economies.'
				imageSrc={CryptoGameDevImage}
				frameClassName='software-dev-frame'
			/>
		</>
	)
}
