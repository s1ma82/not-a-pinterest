import React, {useRef, useState} from 'react'
import {CloseIcon, SearchIcon} from '../imgs'
import {useOutside} from '../../hooks'
import styles from './SearchBlock.module.scss'

const SearchBlock = () => {
	const [input, setInput] = useState('')
	const [inputMini, setInputMini] = useState(true)
	const inputElement = useRef(null)
	const [activityState, setActivityState] = useOutside([
		`.${styles.search_active}`,
	])

	return (
		<div id='searchBlock'
			onClick={e => {
				if (inputMini) {
					setInputMini(false)
					const promise = new Promise((resolve, reject) => {
						resolve(!inputElement.current.classList.contains(styles.search_mini))
					})
					promise
						.then(() => inputElement.current.focus())
						.catch(e => console.error(e.message))
					return 
				}
				if (e.target.closest('button')) return
				if (!activityState || inputElement.current) inputElement.current.focus()
				setActivityState(true)
			}}
			className={`
				${styles.search} 
				${inputMini ? styles.search_mini : ''}
				${activityState ? styles.search_active : ''}
			`}>
			<div
				className={`
					${styles.search__icon} 
					${!activityState ? input.length === 0 ? styles.search__icon_active : '' : ''}
				`}>
				<SearchIcon />
			</div>
			<input
				ref={inputElement}
				name='searchBlockInput'
				onChange={e => setInput(e.target.value)}
				type='text'
				placeholder='Поиск'
				value={input}
				className={styles.search__input}
			/>
			<button
				onClick={() => {
					setInput('')
					setActivityState(false)
				}}
				className={`
					${styles['search__btn-delete']}
					${ input.length !== 0 || activityState
						? styles['search__btn-delete_active'] : ''
					}
				`}>
				<CloseIcon />
			</button>
		</div>
	)
}

export default SearchBlock
