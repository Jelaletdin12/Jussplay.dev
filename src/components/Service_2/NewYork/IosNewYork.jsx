// Tools
import { useRef } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
// Assets
import arrow01 from '../../../assets/ServicesPages/ios-web/icons/01.svg'
import arrow02 from '../../../assets/ServicesPages/ios-web/icons/02.svg'
// Styles
import blockchainStyle from '../../../pages/Blockchain/blockchain.module.scss'
import iosStyles from '../../../pages/ServiceIOS/ios.module.scss'
// Components
import { TitleBlockchain } from '../../../pages/Blockchain/TitleBlockchain'
import { PlatformNewYork } from './PlatformNewYork'
// Utils
import {
	subTitleNewYork,
	subTitleNewYorkSlider,
	titleNewYork,
	titleNewYorkSlider,
} from '../../Util/Service/IOS/data'

export const IosNewYork = () => {
	const swiperRef = useRef(null)

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
				<div className={iosStyles.swiper__platform}>
					<Swiper
						onSwiper={swiper => (swiperRef.current = swiper)}
						spaceBetween={50}
						slidesPerView={1}
					>
						<SwiperSlide>
							<PlatformNewYork title={titleNewYorkSlider}>
								<p>{subTitleNewYorkSlider}</p>
							</PlatformNewYork>
						</SwiperSlide>
						<SwiperSlide>
							<PlatformNewYork title={titleNewYorkSlider}>
								<p>{subTitleNewYorkSlider}</p>
							</PlatformNewYork>
						</SwiperSlide>
						<SwiperSlide>
							<PlatformNewYork title={titleNewYorkSlider}>
								<p>{subTitleNewYorkSlider}</p>
							</PlatformNewYork>
						</SwiperSlide>
					</Swiper>
					<img
						className={
							iosStyles.platform__arrow + ' ' + iosStyles.platform__arrow_prev
						}
						src={arrow01}
						onClick={prevHandle}
					/>
					<img
						className={
							iosStyles.platform__arrow + ' ' + iosStyles.platform__arrow_next
						}
						src={arrow02}
						onClick={nextHandle}
					/>
				</div>
			</div>
		</section>
	)
}
