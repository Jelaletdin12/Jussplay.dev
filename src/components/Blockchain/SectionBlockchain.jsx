/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import '../../pages/Blockchain/blockchainStylesContent.scss'

const SectionBlockchain = ({
	title,
	description,
	imageSrc,
	frameClassName,
}) => {
	const titleRef = useRef(null)
	const descriptionRef = useRef(null)
	const sectionRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.1,
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	useEffect(() => {
		if (isVisible && titleRef.current) {
			const typewriterTitle = new Typewriter(titleRef.current, {
				loop: false,
				delay: 75,
				cursor: '|',
			})

			typewriterTitle
				.typeString(title)
				.callFunction(() => {
					const cursor = titleRef.current.querySelector('.Typewriter__cursor')
					if (cursor) {
						cursor.style.display = 'none'
					}
				})
				.start()
		}

		if (isVisible && descriptionRef.current) {
			const typewriterDescription = new Typewriter(descriptionRef.current, {
				loop: false,
				delay: 75,
				cursor: '|',
			})

			typewriterDescription
				.typeString(description)
				.callFunction(() => {
					const cursor = descriptionRef.current.querySelector(
						'.Typewriter__cursor'
					)
					if (cursor) {
						cursor.style.display = 'none'
					}
				})
				.start()
		}
	}, [isVisible, title, description])

	return (
		<div className='section' ref={sectionRef}>
			<div className={`frame ${frameClassName}`}>
				<img src={imageSrc} alt={title} className='section-image' />
			</div>
			<div className='section-content'>
				<h2 ref={titleRef}></h2>
				<p ref={descriptionRef}></p>
			</div>
		</div>
	)
}

SectionBlockchain.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	frameClassName: PropTypes.string,
}

SectionBlockchain.defaultProps = {
	frameClassName: '',
}

export default SectionBlockchain
