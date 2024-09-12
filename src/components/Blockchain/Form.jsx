/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styles from '../../pages/Blockchain/blockchain.module.scss'

export const Form = () => {
	const [isFocusedArr, setIsFocusedArr] = useState({
		input1: false,
		input2: false,
		input3: false,
		input4: false,
	})
	const [isChangedArr, setIsChangedArr] = useState({
		fullName: false,
		email: false,
		phone: false,
		message: false,
	})
	const [userData, setUserData] = useState({
		firstName: '',
		phoneNumber: '',
		email: '',
		message: '',
	})

	return (
		<div className={styles.blockchainForm}>
			<form action='#' method='get' className={styles.form}>
				<h1 className={styles.formTitle}>BOOK A CONSULTATION</h1>
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
							Full Name
						</span>
					</label>
				</div>
				<div className={styles.inputCol}>
					<label>
						<span className={styles.inputWrapper}>
							<input
								placeholder='+1 012 3456 789'
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
								type='text'
								onChange={e => {
									setUserData({
										...userData,
										phone: e.target.value,
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
							/>
						</span>
						<span
							className={`${styles.placeholder} ${
								isFocusedArr.input2 || isChangedArr.phone
									? styles.placeholderActivePhone
									: null
							} `}
						>
							Phone Number with country code
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
								type='text'
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
							/>
						</span>
						<span
							className={`${styles.placeholder} ${
								isFocusedArr.input3 || isChangedArr.email
									? styles.placeholderActive
									: null
							} `}
						>
							Email
						</span>
					</label>
				</div>
				<div className={styles.inputColMessage}>
					<label>
						<span className={styles.inputWrapper}>
							<input
								placeholder='Your project description..'
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
								type='text'
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
							/>
						</span>
						<span
							className={`${styles.placeholder} ${
								isFocusedArr.input4 || isChangedArr.message
									? styles.placeholderActive
									: null
							} `}
						>
							Message
						</span>
					</label>
				</div>
				<div className={styles.btnForm}>
					<FlipButtonBlockchain
						bgColor={'#000'}
						insideText={'Send Message'}
						textColor={'#fff'}
					/>
				</div>
			</form>
		</div>
	)
}

const FlipButtonBlockchain = ({
	insideText,
	bgColor,
	border,
	textColor,
	onClick,
	isDownload,
	href,
}) => {
	return (
		<a
			style={{
				backgroundColor: bgColor,

				color: textColor,
			}}
			download
			href={href}
			className={`${styles.btnFlipBlockchain}  `}
			data-back={insideText}
			data-front={insideText}
			data-text-color={'#000'}
			onClick={onClick}
		></a>
	)
}
