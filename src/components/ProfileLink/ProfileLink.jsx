import React, {Children} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProfileLink.module.scss'
const ProfileLink = ({ params, className }) => {
	
	const {
		name = '', status = 'Личный',
		mail = '', image = '/blank-profile-picture.png',
		type, href
	} = params
	const Children = () => {
		switch (type) {
			case 'text':
				return (
					<div className={styles.profile__info}>
						<h1 className={styles.name}>{name}</h1>
					</div>
				)
			case 'micro':
				return (
					<div className={styles.profile__image_container_micro}>
						<Image
							src={image}
							width={24}
							height={24}
							layout='fixed'
							alt='Profile image'
							className={styles.profile__image}
						/>
					</div>
				)
			case 'mini':
				return (
					<>
						<div className={styles.profile__image_container_mini}>
							<Image
								src={image}
								width={32}
								height={32}
								layout='fixed'
								alt='Profile image'
								className={styles.profile__image}
							/>
						</div>
						<div className={styles.profile__info}>
							<h1 className={styles.name}>{name}</h1>
						</div>
					</>
				)
			default:
				return (
					<>
						<div className={styles.profile__image_container}>
							<Image
								src={image}
								width={50}
								height={50}
								layout='responsive'
								alt='Profile image'
								className={styles.profile__image}
							/>
						</div>
						<div className={styles.profile__info}>
							<h1 className={styles.name}>{name}</h1>
							<p className={styles.status}>{status}</p>
							<p className={styles.mail}>{mail}</p>
						</div>
					</>
				)
			}
	}

	return (
		// <Link href={href || '/profile'}>
			<a href={href}>
				<div className={`
					${styles.profile} 
					${type ? styles['profile_' + type] : ''}
					${className}
				`}>
					<Children />
				</div>
			</a>
		// </Link>
	)
}

export default ProfileLink
