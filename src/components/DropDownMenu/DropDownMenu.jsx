import styles from './DropDownMenu.module.scss'
import { useOutside } from '../../hooks'
import { Menu } from './components/Menu'
import {Btn} from './components/Btn'


const DropDownMenu = ({children, title, leftmost, btnStyle = "default", menuType = "default", icon = null}) => {
	const [activityState, setActivityState] = useOutside([
		`[data-menu-filter=${title}]`,
	])
	const btnData = {
		state: activityState,
		setState: setActivityState,
		styles, 
		title,
		icon, 
		btnStyle,
	}
	const menuData = {
		setState: setActivityState,
		styles,
		children,
		title,
		menuType,
		leftmost
	}
	return (
		<div className={styles.menu} data-menu-filter={title}>
			<Btn data={btnData} />
			<Menu data={menuData} />	
		</div>
	)
}

export default DropDownMenu