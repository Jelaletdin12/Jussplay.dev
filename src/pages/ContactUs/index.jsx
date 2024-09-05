import { useState } from 'react'

import FlipButton from '../../components/FlipButton'
import Footer from '../../components/Footer'

import transition from '../../pageTransition'

import styles from './contactus.module.scss'

import {
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
	FaWhatsapp,
} from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'

import ellipseOne from '../../assets/ellipse1.png'
import ellipseTwo from '../../assets/ellipse2.png'
import Header from '../../components/Header'
import { CustomScroll } from '../../components/scroll/CustomScroll'

function ContactUs() {
	const [isFocusedArr, setIsFocusedArr] = useState({
		input1: false,
		input2: false,
		input3: false,
		input4: false,
		input5: false,
	})
	const [isChangedArr, setIsChangedArr] = useState({
		firstname: false,
		lastname: false,
		email: false,
		phone: false,
		message: false,
	})

	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		message: '',
		company: 'TM',
		country: 'TM',
	})
	return (
		<CustomScroll>
			<Header />
			<main className={styles.contactus}>
				<div className={styles.contactus_title}>
					<div className={styles.contactus_title_bText}>Contact Us</div>
					<p>Any question or remarks? Just write us a message!</p>
				</div>
				<div className={styles.contactus_mainbody}>
					<div className={styles.contactus_mainbody_left}>
						<div className={styles.contactus_mainbody_left_title}>
							Contact Information
						</div>
						<p>Say something to start a live chat!</p>

						<div className={styles.contactus_mainbody_left_contactinfo}>
							<div className={styles.contactus_mainbody_left_contactinfo_row}>
								<FaPhoneVolume /> +993 77 77 77 77
							</div>
							<div className={styles.contactus_mainbody_left_contactinfo_row}>
								<IoMdMail /> contact@jussplay.dev
							</div>
							<div className={styles.contactus_mainbody_left_contactinfo_row}>
								<IoLocation /> Dubai, UAE
							</div>
						</div>

						<div className={styles.contactus_mainbody_left_links}>
							<div className={styles.contactus_mainbody_left_links_icon}>
								<FaLinkedinIn />
							</div>
							<div className={styles.contactus_mainbody_left_links_icon}>
								<a
									style={{ height: 22, color: '#fff' }}
									href='http://www.instagram.com/jussplay.dev'
								>
									<FaInstagram />
								</a>
							</div>
							<div className={styles.contactus_mainbody_left_links_icon}>
								<FaTelegramPlane />
							</div>
							<div className={styles.contactus_mainbody_left_links_icon}>
								<a
									style={{ height: 22, color: '#fff' }}
									href='https://wa.me/+905389499878'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaWhatsapp />
								</a>
							</div>
						</div>

						<div id='one' className={styles.contactus_mainbody_left_ellipse1}>
							<img src={ellipseOne} alt='' />
						</div>
						<div id='two' className={styles.contactus_mainbody_left_ellipse2}>
							<img src={ellipseTwo} alt='' />
						</div>
					</div>
					<div className={styles.inputContainer}>
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input1: false,
											})
										}
										onFocus={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input1: true,
											})
										}
										type='text'
										onChange={e => {
											setUserData({
												...userData,
												firstName: e.target.value,
											})
											if (e.target.value === '') {
												setIsChangedArr({
													...isChangedArr,
													firstname: false,
												})
												return
											}
											setIsChangedArr({
												...isChangedArr,
												firstname: true,
											})
										}}
									/>
								</span>
								<span
									className={`${styles.placeholder} ${
										isFocusedArr.input1 || isChangedArr.firstname
											? styles.placeholderActive
											: null
									} `}
								>
									First Name
								</span>
							</label>
						</div>

						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input2: false,
											})
										}
										onFocus={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input2: true,
											})
										}
										onChange={e => {
											setUserData({
												...userData,
												lastName: e.target.value,
											})
											if (e.target.value === '') {
												setIsChangedArr({
													...isChangedArr,
													lastname: false,
												})
												return
											}
											setIsChangedArr({
												...isChangedArr,
												lastname: true,
											})
										}}
										type='text'
									/>
								</span>
								<span
									className={`${styles.placeholder} ${
										isFocusedArr.input2 || isChangedArr.lastname
											? styles.placeholderActive
											: null
									}`}
								>
									Last Name
								</span>
							</label>
						</div>
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input3: false,
											})
										}
										onFocus={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input3: true,
											})
										}
										onChange={e => {
											setUserData({
												...userData,
												email: e.target.value,
											})
											if (e.target.value === '') {
												setIsChangedArr({
													...isChangedArr,
													email: false,
												})
												return
											}
											setIsChangedArr({
												...isChangedArr,
												email: true,
											})
										}}
										type='email'
									/>
								</span>
								<span
									className={`${styles.placeholder} ${
										isFocusedArr.input3 || isChangedArr.email
											? styles.placeholderActive
											: null
									}`}
								>
									Email
								</span>
							</label>
						</div>
						<div className={styles.inputCol}>
							<label>
								<span className={styles.inputWrapper}>
									<input
										onBlur={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input4: false,
											})
										}
										onFocus={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input4: true,
											})
										}
										onChange={e => {
											setUserData({
												...userData,
												phoneNumber: e.target.value,
											})
											if (e.target.value === '') {
												setIsChangedArr({
													...isChangedArr,
													phone: false,
												})
												return
											}
											setIsChangedArr({
												...isChangedArr,
												phone: true,
											})
										}}
										type='text'
									/>
								</span>
								<span
									className={`${styles.placeholder} ${
										isFocusedArr.input4 || isChangedArr.phone
											? styles.placeholderActive
											: null
									}`}
								>
									Phone Number
								</span>
							</label>
						</div>
						<div
							className={styles.inputCol}
							style={{
								width: '100%',
							}}
						>
							<label>
								<span className={styles.inputWrapper}>
									<textarea
										onBlur={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input5: false,
											})
										}
										onFocus={() =>
											setIsFocusedArr({
												...isFocusedArr,
												input5: true,
											})
										}
										onChange={e => {
											setUserData({
												...userData,
												message: e.target.value,
											})
											if (e.target.value === '') {
												setIsChangedArr({
													...isChangedArr,
													message: false,
												})
												return
											}
											setIsChangedArr({
												...isChangedArr,
												message: true,
											})
										}}
									></textarea>
								</span>
								<span
									className={`${styles.placeholder}  ${
										isFocusedArr.input5 || isChangedArr.message
											? styles.placeholderActiveArea
											: null
									}`}
								>
									Message
								</span>
							</label>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
							}}
						>
							<FlipButton
								bgColor={'#000'}
								insideText={'Send Message'}
								textColor={'#fff'}
							/>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</CustomScroll>
	)
}

export default transition(ContactUs)
