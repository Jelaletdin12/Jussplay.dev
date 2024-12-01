/* eslint-disable react/no-unescaped-entities */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { FaArrowTurnDown } from 'react-icons/fa6'
import emplas from '../../assets/emplascase.png'
import kidstime from '../../assets/kidstime.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LogoLottie from '../../components/Lottie/Lottie'
import Partners from '../../components/Partners'
import ScrollSection from '../../components/ScrollSection'
import WorkTab from '../../components/WorkTab'
import transition from '../../pageTransition'
import './gradient.scss'
import styles from './home.module.scss'

gsap.registerPlugin(ScrollTrigger)

const workTabs = [
	{ id: 1, name: 'kidstime', type: 'mobile app', img: kidstime },
	{ id: 2, name: 'emplas realestate', type: 'web', isTop: true, img: emplas },
	{ id: 3, name: 'jussplay.labs', type: 'web' },
	{ id: 4, name: 'asghgabat drift club', type: 'mobile app' },
	{ id: 5, name: 'coming soon' },
	{ id: 6, name: 'coming soon', isBottom: true },
]

function Home() {
	const container = useRef()
	const interBubble = useRef()

	function throttle(callback, limit) {
		let waiting = false // Whether the callback is waiting to be invoked
		return function (...args) {
			if (!waiting) {
				callback.apply(this, args)
				waiting = true
				setTimeout(() => (waiting = false), limit)
			}
		}
	}

	useEffect(() => {
		const handleMouseMove = throttle(event => {
			const { clientX: x, clientY: y } = event
			if (interBubble.current) {
				gsap.to(interBubble.current, {
					x,
					y,
					duration: 0.2,
					ease: 'power2.out',
				})
			}
		}, 100) // Adjust throttle delay if needed

		window.addEventListener('mousemove', handleMouseMove)

		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	useEffect(() => {
		const mm = gsap.matchMedia()

		const createAnimation = ({ x1, x2, x, y, aboutY }) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '#hero',
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
			})
			tl.to('#heroText1', { x: x1, opacity: 0 })
				.to('#heroText2', { x: x2, opacity: 0 }, '<')
				.to('#logoLottie', { x }, '<')
				.to('#logoLottie', { y }, '>')
				.to('#about', { y: aboutY, opacity: 1 }, '<')
		}

		mm.add('(min-width: 521px)', () =>
			createAnimation({ x1: -200, x2: 200, x: 400, y: 0, aboutY: -650 })
		)
		mm.add('(max-width: 520px)', () =>
			createAnimation({ x1: -150, x2: 150, x: 0, y: -350, aboutY: -400 })
		)

		return () => mm.revert()
	}, [])

	return (
		<main className={styles.main} ref={container}>
			<Header />
			<section
				className={`${styles.main_heroSection} ${styles.main_heroSection_active}`}
				id='hero'
			>
				<div className='gradient-bg'>
					<svg xmlns='http://www.w3.org/2000/svg'>
						<defs>
							<filter id='goo'>
								<feGaussianBlur
									in='SourceGraphic'
									stdDeviation='10'
									result='blur'
								/>
								<feColorMatrix
									in='blur'
									mode='matrix'
									values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
									result='goo'
								/>
								<feBlend in='SourceGraphic' in2='goo' />
							</filter>
						</defs>
					</svg>
					<div className='gradients-container'>
						<div className='g1'></div>
						<div className='g2'></div>
						<div className='g3'></div>
						<div className='g4'></div>
						<div className='g5'></div>
						<div ref={interBubble} className='interactive'></div>
					</div>
				</div>
				<div className={styles.heroSecWithVideo}>
					<h1 className={styles.main_heroSection_motto}>
						<div className={styles.heroText1} id='heroText1'>
							JUST SAY IT
						</div>
						<div id='logoLottie'>
							<LogoLottie />
						</div>
						<div
							id='heroText2'
							className={styles.main_heroSection_motto_lowerText}
						>
							WE WILL Make IT
						</div>
					</h1>
				</div>
				<section className={styles.main_intro} id='about'>
					<div>
						<p>
							Join <span>JussPlay,</span>
						</p>
						<p>
							and see your project <span>JUST</span> come to life.
						</p>
						<p>
							<span>SAY</span> what you want: web, mobile, design, or
						</p>
						<p>
							other services, and we will <span>IT</span> happen.
						</p>
						<p>Our team of experts are here, and</p>
						<p>
							<span>WE</span> manage every project professionally.
						</p>
						<p>
							Our principal is to <span>MAKE</span> your vision a reality.
						</p>
						<p>Trust us with your ideas,</p>
						<p>
							and we will complete <span>IT</span> to perfection.
						</p>
					</div>
				</section>
			</section>
			<section
				className={styles.main_work}
				id='projects'
				style={{ marginTop: '700px' }}
			>
				<h2>
					Selected Projects
					<FaArrowTurnDown size={12} />
				</h2>
				<div>
					{workTabs.map(wt => (
						<WorkTab
							key={wt.id}
							name={wt.name}
							order={wt.id}
							type={wt.type}
							isTop={wt.isTop}
							isBottom={wt.isBottom}
							img={wt.img}
						/>
					))}
				</div>
			</section>
			<ScrollSection />
			<Partners />
			<Footer />
		</main>
	)
}

export default transition(Home)
