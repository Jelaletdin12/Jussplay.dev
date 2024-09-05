import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './partners.module.scss'

import clues from '../../assets/clues.png'
import books from '../../assets/ebooks.png'
import emplas from '../../assets/emplas.png'
import google from '../../assets/google.png'
import nature from '../../assets/nature.png'
import sky from '../../assets/sky.png'

// Image Data
const images = [
	[nature, emplas, sky, google, clues, books],
	[emplas, nature, sky, google, books, clues],
	[nature, sky, emplas, google, clues, books],
	[nature, emplas, sky, google, clues, books],
	[books, nature, emplas, sky, google, clues],
]

export default function Partners() {
	const [slideIndexes, setSlideIndexes] = useState(Array(5).fill(0))

	const settings = speed => ({
		speed: 2500,
		infinite: true,
		autoplay: true,
		autoplaySpeed: speed,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		swipeToSlide: true,
		cssEase: 'ease-in-out',
		arrows: false,
		pauseOnHover: false,
	})

	useEffect(() => {
		const intervals = slideIndexes.map((_, i) =>
			setInterval(() => {
				setSlideIndexes(prevIndexes => {
					const newIndexes = [...prevIndexes]
					newIndexes[i] = (newIndexes[i] + 1) % images[i].length
					return newIndexes
				})
			}, 1500 + i * 500)
		)

		return () => intervals.forEach(interval => clearInterval(interval))
	}, [])

	return (
		<section className={styles.partners}>
			<h4 className={styles.partners_trustedText}>Trusted by</h4>
			<div className={styles.framecon}>
				{images.map((imageSet, i) => (
					<Slider key={i} {...settings(2000 + i * 500)}>
						{imageSet.map((src, index) => (
							<div
								key={index}
								style={{ paddingTop: '40px' }}
								className={styles.sliderItem}
							>
								<img src={src} alt='' />
							</div>
						))}
					</Slider>
				))}
			</div>
		</section>
	)
}
