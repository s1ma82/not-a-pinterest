import React, {useState, useEffect} from 'react'
import styles from './DropDownMenu.module.scss'
import {DropDownMenuIcon} from '../imgs'
import {useOutside} from '../../hooks'

const DropDownMenu = ({children, title, leftmost, params}) => {
	const [activityState, setActivityState] = useOutside([
		`[data-menu-filter=${title}]`,
	])

	const ChildrenLinks = () => (
		<>
			{React.Children.map(children, child => {
				return <li>{React.cloneElement(child)}</li>
			})}
		</>
	)
	const BtnContent = () => {
		if (!params) return (
			<>
				{title}
				<div className={styles.icon_wrapper}>
					<DropDownMenuIcon className={styles.icon} />
				</div>
			</>	
		)
		if (params.type === 'sircle') {
			return (
				<params.icon />
			)
		} 
	
	}
	return (
		<div className={styles.menu} data-menu-filter={title}>
			<button
				onClick={() => setActivityState(!activityState)}
				className={`
				${styles.menu__button}
				${params && params.type === 'sircle' ? styles.menu__button_sircle: ''}
				${activityState ? styles.menu__button_active : ''}
				`}>
				<BtnContent />
			</button>
			<div
				className={`
				${styles.links_wrapper}
				${params && params.type === 'sircle' ? styles.links_wrapper_sircle : ''} 
				${activityState ? styles.links_wrapper_active : ''} 
				${leftmost ? styles.leftmost : ''}
				`}>
				<ul
					className={styles.links}
					onClick={e =>
						e.target.closest('li').tagName === 'LI'
							? setActivityState(false)
							: {}
					}>
					<ChildrenLinks />
				</ul>
			</div>
		</div>
	)
}

export default DropDownMenu
