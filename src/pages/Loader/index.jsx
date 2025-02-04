import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import JDPloader from '../../components/JDP/JDP'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import styles from './loader.module.scss'

function Loader() {
	const [loadPercentage, setLoadPercentage] = useState(0)
	const [hidden, setHidden] = useState(false)
	const [isLottiePlaying, setIsLottiePlaying] = useState(false)
	const navigate = useNavigate()
	const containerRef = useRef(null)
	const audioRef = useRef(null)

	useEffect(() => {
		const interval = setInterval(() => {
			setLoadPercentage(prev => {
				if (prev >= 100) {
					clearInterval(interval)
					return 100
				}
				return prev + 1
			})
		}, 50)

		return () => clearInterval(interval)
	}, [])

	const handleButtonClick = () => {
		setHidden(true)
		setIsLottiePlaying(true)
		audioRef.current.play()
		initiateExplosion()

		return setTimeout(() => {
			navigate('/home')
		}, 4500)
	}

	const initiateExplosion = () => {
		const movementSpeed = 30
		const totalObjects = 5000
		const objectSize = 3
		let dirs = []
		let parts = []

		const container = containerRef.current
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			10000
		)
		camera.position.z = 1000

		const scene = new THREE.Scene()

		function ExplodeAnimation(x, y) {
			const geometry = new THREE.BufferGeometry()
			const vertices = []

			for (let i = 0; i < totalObjects; i++) {
				vertices.push(x, y, 0)
				dirs.push({
					x: Math.random() * movementSpeed - movementSpeed / 2,
					y: Math.random() * movementSpeed - movementSpeed / 2,
					z: Math.random() * movementSpeed - movementSpeed / 2,
				})
			}

			geometry.setAttribute(
				'position',
				new THREE.Float32BufferAttribute(vertices, 3)
			)
			const material = new THREE.PointsMaterial({ size: objectSize })
			const particles = new THREE.Points(geometry, material)

			this.object = particles
			this.status = true

			scene.add(this.object)

			this.update = function () {
				if (this.status) {
					const positions = this.object.geometry.attributes.position.array
					for (let i = 0; i < totalObjects * 3; i += 3) {
						positions[i] += dirs[i / 3].x * 0.5
						positions[i + 1] += dirs[i / 3].y * 0.5
						positions[i + 2] += dirs[i / 3].z * 0.5
					}
					this.object.geometry.attributes.position.needsUpdate = true
				}
			}
		}

		const renderer = new THREE.WebGLRenderer()
		renderer.setSize(window.innerWidth, window.innerHeight)
		container.appendChild(renderer.domElement)

		parts.push(new ExplodeAnimation(0, 0))

		function render() {
			requestAnimationFrame(render)
			parts.forEach(part => part.update())
			renderer.render(scene, camera)
		}

		render()

		window.addEventListener(
			'resize',
			() => {
				camera.aspect = window.innerWidth / window.innerHeight
				camera.updateProjectionMatrix()
				renderer.setSize(window.innerWidth, window.innerHeight)
			},
			false
		)
	}
	return (
		<CustomScroll>
			<main className={styles.loader}>
				<audio ref={audioRef} src='/Loading.mp3'></audio>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{loadPercentage === 100 ? (
						<JDPloader isPlaying={isLottiePlaying} />
					) : (
						<div className={styles.loader_percent}>{loadPercentage}%</div>
					)}
					<div
						className={`${styles.loader_start} ${
							loadPercentage === 100
								? styles.loader_startActive
								: styles.loader_startInactive
						}`}
						onClick={handleButtonClick}
					>
						Start journey
					</div>
				</div>
				<div
					ref={containerRef}
					style={{ position: 'absolute', top: '0', left: '0' }}
					className='js-explosion'
				></div>
			</main>
		</CustomScroll>
	)
}

export default transition(Loader)
