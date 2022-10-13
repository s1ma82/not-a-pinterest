import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import NotPinterestLogo from './icons/not-pinterest-logo'
import {
	DropDownMenu,
	SircleMenu,
	NavLink,
	SidePanel,
	SearchBlock,
	MainHeaderMenu,
	ProfileLink,
} from '../../components'
import {useRouter} from 'next/router'
import NoticeIcon from './icons/notice-icon'
import MessegesIcon from './icons/messeges-icon'

const Header = () => {
	const {asPath} = useRouter()
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.nav__item}>
					<NavLink
						href='/'
						Icon={NotPinterestLogo}
						active={asPath === '/' ? true : false}>
						Главное
					</NavLink>
					<DropDownMenu title='Создать'>
						<Link href='/pin-builder'>Создать пин-идею</Link>
						<Link href='/homefeed'>Создать пин</Link>
					</DropDownMenu>
				</div>
				<div
					className={`${styles.nav__item} ${styles.nav__item_searchblock}`}>
					<SearchBlock />
				</div>
				<div className={styles.nav__item}>
					<SircleMenu name='NoticeMenu' Icon={NoticeIcon}>
						<SidePanel.SideNoticeMenu />
					</SircleMenu>
					<SircleMenu name='MessagesMenu' Icon={MessegesIcon}>
						<SidePanel.SideMessagesMenu />
					</SircleMenu>
					<ProfileLink type='micro' />
					<MainHeaderMenu />
				</div>
			</nav>
		</header>
	)
}

export default Header
