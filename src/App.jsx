import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useCallback, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import sound from './assets/lottieSound.json'
import pause from './assets/pause.png'
import play from './assets/play.png'
import playing from './assets/playing.png'
import CustomCursor from './components/cursor'
//import Blockchain from './pages/Blockchain'
//import Token from './pages/Token'
import { NotFoundPage } from './pages/Error/NotFoundPage'
// import CustomScroll from './components/scroll/CustomScroll'
import { useSound } from './providers/soundContext'

const Home = lazy(() => import('./pages/Home'))
const Loader = lazy(() => import('./pages/Loader'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Career = lazy(() => import('./pages/Career'))
const Industry = lazy(() => import('./pages/Industry'))
const About = lazy(() => import('./pages/About'))
const Service = lazy(() => import('./pages/Service'))
const Blockchain = lazy(() => import('./pages/Blockchain'))
const Token = lazy(() => import('./pages/Token'))
const Metaverse = lazy(() => import('./pages/Metaverse'))
const Blockchain_4 = lazy(() => import('./pages/Blockchain4'))
const Blockchain_6 = lazy(() => import('./pages/Blockchain6'))
const Web3 = lazy(() => import('./pages/Web3'))
const Wallet = lazy(() => import('./pages/Wallet'))
const Service_1 = lazy(() => import('./pages/Service_1'))
const ServiceIos = lazy(() => import('./pages/ServiceIOS'))

export default function App() {
	const location = useLocation()
	const audioRef = useRef(null)
	const [isPaused, setIsPaused] = useState(false)
	const titleAudiRef = useRef(null)

	const { isPlaying, setIsPlaying } = useSound()

	const lottieOptions = {
		loop: true,
		autoplay: false,
		animationData: sound,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	// const handleLottieClick = useCallback(() => {
	// 	if (audioRef.current) {
	// 		if (isPlaying) {
	// 			audioRef.current.pause()
	// 			setIsPaused(true)
	// 		} else {
	// 			audioRef.current.play()
	// 			setIsPaused(false)
	// 			if (titleAudiRef.current) {
	// 				titleAudiRef.current.classList.add('title-lottie__anim')
	// 			}

	// 			setTimeout(() => {
	// 				if (titleAudiRef.current) {
	// 					titleAudiRef.current.style.display = 'none'
	// 				}
	// 			}, 500)
	// 		}
	// 		setIsPlaying(prevState => !prevState)
	// 	}
	// }, [isPlaying])

	const handleLottieClick = useCallback(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
			setIsPlaying(prevState => !prevState)
		}
	}, [isPlaying])

	return (
		<AnimatePresence mode='wait'>
			<CustomCursor />
			<audio ref={audioRef} src='/MenuSound.m4a' type='audio/mpeg' loop />
			<div
				style={{
					position: 'fixed',
					bottom: 20,
					right: 20,
					zIndex: 1000,
					display: 'flex',
					alignItems: 'center',
					gap: 15,
				}}
				onClick={handleLottieClick}
			>
				{location.pathname === '/' && (
					<h1
						ref={titleAudiRef}
						className={isPlaying ? 'title-lottie__anim' : 'title-lottie'}
						style={{ color: 'gray' }}
					>
						For Better Experience Please Turn On Sound
					</h1>
				)}
				{!isPlaying && !isPaused && (
					<img src={play} alt='Play' style={{ width: '40px' }} />
				)}
				{isPlaying && !isPaused && (
					<img src={playing} style={{ width: '40px' }} alt='Playing' />
				)}
				{isPaused && <img src={pause} alt='Pause' style={{ width: '40px' }} />}
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes location={location} key={location.pathname}>
					<Route index element={<Loader />} />
					<Route path='/home' element={<Home />} />
					<Route path='/contactus' element={<ContactUs />} />
					<Route path='/career' element={<Career />} />
					<Route path='/industry' element={<Industry />} />
					<Route path='/aboutus' element={<About />} />
					<Route path='/service' element={<Service />} />
					<Route path='/blockchain' element={<Blockchain />} />
					<Route path='/token' element={<Token />} />
					<Route path='/metaverse' element={<Metaverse />} />
					<Route path='/blockchain_4' element={<Blockchain_4 />} />
					<Route path='/blockchain_6' element={<Blockchain_6 />} />
					<Route path='/web3' element={<Web3 />} />
					<Route path='/service-1' element={<Service_1 />} />
					<Route path='/wallet' element={<Wallet />} />
					<Route path='/service-ios' element={<ServiceIos />} />
					<Route path='*' element={<NotFoundPage />} />
					<Route path='' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</AnimatePresence>
	)
}
