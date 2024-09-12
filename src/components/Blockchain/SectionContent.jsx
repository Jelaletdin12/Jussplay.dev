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
				title='PVP game development'
				description='WE at Jussplay developments, power up your play to earn nft game by leveraging our in-depth knowledge and development expertise'
				imageSrc={pvpGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='P2E Game Development'
				description='Launch next-gen play-to-earn games where players acquire in-game assets or tokens when they unlock new game levels'
				imageSrc={p2EGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='M2E Game Development'
				description='Launch next-gen play-to-earn games where players acquire in-game assets or tokens when they unlock new game levels'
				imageSrc={M2EGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='Web3 Game Development'
				description='Launch next-gen play-to-earn games where players acquire in-game assets or tokens when they unlock new game levels'
				imageSrc={Web3GameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='RP Game development'
				description='Launch next-gen play-to-earn games where players acquire in-game assets or tokens when they unlock new game levels'
				imageSrc={RPGameDevImage}
				frameClassName='software-dev-frame'
			/>
			<SectionBlockchain
				title='Crypto game development'
				description='Launch next-gen play-to-earn games where players acquire in-game assets or tokens when they unlock new game levels'
				imageSrc={CryptoGameDevImage}
				frameClassName='software-dev-frame'
			/>
		</>
	)
}
