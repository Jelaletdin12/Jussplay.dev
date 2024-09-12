import classNames from 'classnames'
import { memo, useCallback, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Swiper, SwiperSlide } from 'swiper/react'
import select from '../../assets/select.wav'
import DropdownContent from '../../components/headerDropdownContent/index'
import styles from './header.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'

export default memo(function Header() {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const audio = new Audio(select)

	const handleMouseEnter = useCallback(dropdown => {
		setActiveDropdown(dropdown)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setActiveDropdown(null)
	}, [])

	// Function to play sound
	const playSound = () => {
		audio.play()
	}

	return (
		<header className={styles.header}>
			<nav className={styles.header_nav}>
				<ul>
					<li>
						<Link to={'/home'} onClick={playSound}>
							Home
						</Link>
					</li>
					<li
						onMouseEnter={() => handleMouseEnter('services')}
						onMouseLeave={handleMouseLeave}
						onClick={playSound}
					>
						<Link to={'/service'}>Services</Link>
						{activeDropdown === 'services' && (
							<DropdownContent dropdownType='services' />
						)}
					</li>
					<li>
						<Link to='/industry' onClick={playSound}>
							Industries
						</Link>
					</li>
					<li
						onMouseEnter={() => handleMouseEnter('blockchain')}
						onMouseLeave={handleMouseLeave}
						onClick={playSound}
					>
						<Link to='/blockchain'>Blockchain</Link>
						{activeDropdown === 'blockchain' && (
							<DropdownContent dropdownType='blockchain' />
						)}
					</li>
					<li
						onMouseEnter={() => handleMouseEnter('solutions')}
						onMouseLeave={handleMouseLeave}
						onClick={playSound}
					>
						Solutions
						{activeDropdown === 'solutions' && (
							<DropdownContent dropdownType='solutions' />
						)}
					</li>
					<li>
						<Link to='/contactus' onClick={playSound}>
							Contact us{' '}
						</Link>
					</li>
					<li>
						<Link to='/aboutus' onClick={playSound}>
							About us
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={styles.header_menuBtn}
				onClick={() => setIsMenuActive(true)}
			>
				menu
			</div>
			<div
				className={classNames({
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
						<SwiperSlide>
							<li className='links'>
								<HashLink
									smooth
									to={'/home/#hero'}
									offset={50}
									onClick={() => setIsMenuActive(false)}
								>
									home
								</HashLink>
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li className='links'>
								<Link to='/industry' onClick={() => setIsMenuActive(false)}>
									Industries
								</Link>
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li className='links'>
								<HashLink
									smooth
									to={'/home/#projects'}
									offset={-50}
									onClick={() => setIsMenuActive(false)}
								>
									projects
								</HashLink>
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li className='links'>
								<HashLink
									smooth
									to={'/home/#work'}
									offset={25}
									onClick={() => setIsMenuActive(false)}
								>
									services
								</HashLink>
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								<Link
									to='/aboutus'
									onClick={() => setIsMenuActive(false)}
									style={{ color: '#fff' }}
								>
									About us
								</Link>
							</li>
						</SwiperSlide>
						<SwiperSlide>
							<li>
								<Link to='/contactus' style={{ color: '#fff' }}>
									Contact us
								</Link>
							</li>
						</SwiperSlide>
					</Swiper>
				</ul>

				<div
					className={styles.header_menu_close}
					onClick={() => setIsMenuActive(false)}
				>
					<IoMdClose />
				</div>

				<div className={styles.header_menu_socials}>
					<div className={styles.header_menu_socials_icons}>
						<a
							href='https://wa.me/+905389499878'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaWhatsapp />
						</a>
						<a href='http://www.instagram.com/jussplay.dev'>
							<FaInstagram />
						</a>
					</div>
					<div className={styles.header_menu_socials_pageLinks}></div>
				</div>
			</div>
		</header>
	)
})
