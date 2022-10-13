import React from 'react'
import Link from 'next/link'
import styles from './NavLink.module.scss'

const NavLink = ({active, href, children, Icon}) => {
	const IconComp = () => (Icon ? <Icon className={styles.icon} /> : null)
	return (
		<Link href={href}>
			<a className={`${styles.link} ${active ? styles.link_active : ''}`}>
				<IconComp />
				{children}
			</a>
		</Link>
	)
}

export default NavLink
