import React, {useState, useEffect} from 'react'
import styles from './DropDownMenu.module.scss'
import {DropDownMenuIcon} from '../imgs'
import {useOutside} from '../../hooks'

const DropDownMenu = ({children, content, title, leftmost, params}) => {
	const [activityState, setActivityState] = useOutside([
		`[data-menu-filter=${title}]`,
	])

	const Btn = () => {
		const Icon =  () => params ? <params.icon/>
			: <DropDownMenuIcon className={styles.icon} />
		
		const BtnDefault = () => (
			<button onClick={() => setActivityState(!activityState)}
				className={`
					${styles.menu__button}
					${activityState && styles.menu__button_active}
				`}
			>
				{title}
				<div className={styles.icon_wrapper}>
					<Icon/>
				</div>
			</button>
		)
		const BtnSircle = () => (
			<button onClick={() => setActivityState(!activityState)}
				className={`
					${styles.menu__button}
					${styles.menu__button_sirlce}
					${activityState && styles.menu__button_active}
				`}
			> 
				<Icon/>
			</button>
		)
		return params && params.type === 'sircle' ? <BtnSircle/> : <BtnDefault/>
	}
	const Content = () => {

		const ContentLinks = () => {
			const ChildrenLinks = () => React.Children.map(children, child =>
				<li>{React.cloneElement(child)}</li>
			)
			return (
				<div className={`
						${styles.links_wrapper}
						${params && params.type === 'sircle' ? styles.links_wrapper_sircle : ''} 
						${activityState ? styles.links_wrapper_active : ''} 
						${leftmost ? styles.leftmost : ''}
					`}>
					<ul	className={styles.links}
						onClick={e => 
							e.target.closest('li').tagName !== 'LI' ||
							setActivityState(false)
						}
					>
						<ChildrenLinks/>
					</ul>
				</div>
			)
		}
		const ContentShare = () => {
			return 
		}

		return <ContentLinks/>
	}

	return (
		<div className={styles.menu} data-menu-filter={title}>
			<Btn/>
			<Content/>	
		</div>
	)
}

export default DropDownMenu