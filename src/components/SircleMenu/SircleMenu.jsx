import React from 'react'
import {useOutside} from '../../hooks'
import styles from './SircleMenu.module.scss'
const SircleMenu = ({name, children, Icon}) => {
	const [activityState, setActivityState] = useOutside([
		`[data-menu-filter="${name}"]`,
		`.${styles['side-panel']}`,
	])
	return (
		<div data-menu-filter={name} className={styles['sircle-menu']}>
			<button
				onClick={() => setActivityState(!activityState)}
				className={`${styles.btn} ${
					activityState ? styles.btn_active : ''
				}`}>
				<div className={styles.icon_container}>
					<Icon />
				</div>
			</button>
			<div
				data-menu-filter={name}
				className={`${styles['side-panel']} ${
					activityState ? styles['side-panel_active'] : ''
				}`}>
				{children}
			</div>
		</div>
	)
}

export default SircleMenu
