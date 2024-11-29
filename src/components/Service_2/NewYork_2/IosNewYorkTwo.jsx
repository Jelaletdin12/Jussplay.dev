// Styles
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Components
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import arrowNext from '../../../assets/ServicesPages/ios-web/icons/03.svg'
import arrowPrev from '../../../assets/ServicesPages/ios-web/icons/04.svg'
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import {
	serviceListIosConsulting,
	subTitleNewYork,
	subTitleServiceIosContent,
	titleNewYork,
	titleServiceIosContent,
} from '../../Util/Service/IOS/data'
import { IosList } from './IosList'
import { IosListAbout } from './IosListAbout'

export const IosNewYorkTwo = () => {
	const swiperRef = useRef(null)

	const handleScroll = e => {
		if (swiperRef.current) {
			const swiper = swiperRef.current.swiper
			const progress = parseFloat(e.target.value)
			swiper.slideTo(Math.round(progress * (swiper.slides.length - 1)))
		}
	}

	const nextHandle = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext()
		}
	}

	const prevHandle = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev()
		}
	}

	return (
		<section className={iosStyles.ios__section}>
			<div className={blockchainStyle.blockchainContainer}>
				<TitleBlockchain title={titleNewYork} subTitle={subTitleNewYork} />
				<div className={iosStyles.ios__about_develop}>
					<div className={iosStyles.ios__about_custom__scroll}>
						<div className={iosStyles.ios__about_row}>
							<IosList />
							<IosListAbout />
						</div>
					</div>
				</div>
			</div>
			<div className={iosStyles.ios__about_develop_mobile}>
				<div className={iosStyles.ios__about_mobile__slider}>
					<Swiper
						ref={swiperRef}
						className={iosStyles.ios__about_mobile__slider_item}
						spaceBetween={50}
						slidesPerView={1}
						onSwiper={swiper => (swiperRef.current = swiper)}
						onSlideChange={swiper => {
							const scroll = document.getElementById('swiper-scroll')
							if (scroll) {
								scroll.value = (swiper.progress * 100).toString()
							}
						}}
					>
						{serviceListIosConsulting.map(slideItem => (
							<>
								<SwiperSlide
									className={iosStyles.ios__about_mobile__slider_item__slide}
									key={slideItem.id}
								>
									<h1>{slideItem.title}</h1>
								</SwiperSlide>
							</>
						))}
					</Swiper>
					<img
						className={
							iosStyles.ios_slider__arrow +
							' ' +
							iosStyles.ios_slider__arrow_prev
						}
						src={arrowPrev}
						onClick={prevHandle}
					/>
					<img
						className={
							iosStyles.ios_slider__arrow +
							' ' +
							iosStyles.ios_slider__arrow_next
						}
						src={arrowNext}
						onClick={nextHandle}
					/>
				</div>
				<div className={iosStyles.ios__about_slider__body}>
					<div
						id='swiper-scroll'
						onChange={handleScroll}
						className={iosStyles.ios__about_custom__scroll}
					>
						<div className={iosStyles.ios__about_slider__body_content}>
							<h1>{titleServiceIosContent}</h1>
							<p>{subTitleServiceIosContent}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
