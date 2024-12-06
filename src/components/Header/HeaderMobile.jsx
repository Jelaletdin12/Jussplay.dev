import classNames from 'classnames'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './header.module.scss'
import { HeaderSocial } from './HeaderSocial'

export const HeaderMobile = ({
	isMenuActive,
	playSound,
	menuItems,
	activeSubMenuIndex,
	setIsMenuActive,
	toggleSubMenu,
}) => {
	return (
		<div
			className={classNames(styles.header_menu, {
				[styles.header_menu_active]: isMenuActive,
				[styles.header_menu_inactive]: !isMenuActive,
			})}
		>
			<ul className={styles.header_menu_diagonal}>
				<Swiper
					direction={'vertical'}
					loop={false}
					pagination={false}
					modules={Navigation}
					slidesPerView={3}
					spaceBetween={10}
					centeredSlides={true}
					className='mySwiper'
					onSlideChange={() => {
						if (window.innerWidth <= 520) {
							// Ensure it's mobile
							playSound()
						}
					}}
				>
					{menuItems.map((item, index) => (
						<SwiperSlide key={index}>
							<li
								style={{
									...(index === 5 && activeSubMenuIndex === 4
										? { marginTop: 150 }
										: {}),
								}}
							>
								<HashLink
									smooth
									to={item.path}
									onClick={() => setIsMenuActive(false)}
								>
									{item.name}
								</HashLink>
								{item.list && (
									<motion.div
										animate={{
											rotate: activeSubMenuIndex === index ? 180 : 0,
										}}
										style={{ zIndex: 1000 }}
										transition={{ duration: 0.3, ease: 'backInOut' }}
										onClick={() => toggleSubMenu(index)}
									>
										{item.icon}
									</motion.div>
								)}
							</li>
							{activeSubMenuIndex === index && (
								<motion.div
									animate={{
										y: activeSubMenuIndex ? -30 : -50,
										opacity: activeSubMenuIndex ? 1 : 0,
									}}
									transition={{ duration: 0.4, ease: 'easeOut' }}
								>
									<ul>
										<Swiper
											direction={'vertical'}
											loop={false}
											pagination={false}
											modules={Navigation}
											slidesPerView={3}
											spaceBetween={5}
											centeredSlides={true}
											className='mySubSwiper'
											onSlideChange={() => {
												if (window.innerWidth <= 520) {
													// Ensure it's mobile
													playSound()
												}
											}}
										>
											{item.list.map((subItem, index) => (
												<SwiperSlide key={index}>
													<li style={{ fontSize: 36 }}>
														<HashLink to={subItem.path}>
															{subItem.name}
														</HashLink>
													</li>
												</SwiperSlide>
											))}
										</Swiper>
									</ul>
								</motion.div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</ul>

			<HeaderSocial setIsMenuActive={setIsMenuActive} />
		</div>
	)
}
