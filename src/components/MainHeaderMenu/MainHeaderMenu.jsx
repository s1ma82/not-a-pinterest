import React from "react";
import Link from "next/link";
import { DropDownMenuIcon } from "../imgs";
import styles from "./MainHeaderMenu.module.scss";
import { useOutside } from "../../hooks";
import { ProfileLink } from "../../components";

const MainHeaderMenu = () => {
	const [activityState, setActivityState] = useOutside([
		`.${styles.menu__btn_active}`,
		`.${styles.menu__content_active}`,
	]);

	return (
		<div className={styles.menu}>
			<button
				onClick={() => setActivityState(!activityState)}
				className={`${styles.menu__btn} ${
					activityState ? styles.menu__btn_active : ""
				}`}
			>
				<DropDownMenuIcon />
			</button>
			<div
				className={`${styles.menu__content} ${
					activityState ? styles.menu__content_active : ""
				}`}
			>
				<div className={styles.section}>
					<p className={styles.section__label}>Сейчас:</p>
					<div className={styles.section__content}>
						<ProfileLink
							name="User"
							mail="usermail@mail.com"
							status="status"
						/>
					</div>
				</div>
				<div className={styles.section}>
					<p className={styles.section__label}>Ваши аккаунты</p>
					<div className={styles.section__content}>
						<ul className={styles.links}>
							<li className={styles.link}>
								<Link href="/add-account">
									Добавить аккаунт
								</Link>
							</li>
							<li className={styles.link}>
								<Link href="/convert-business">
									Перейти на бизнес аккаунт
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.section}>
					<p className={styles.section__label}>Дополнительно</p>
					<div className={styles.section__content}>
						<ul className={styles.links}>
							<li className={styles.link}>
								<Link href="/">Настройки</Link>
							</li>
							<li className={styles.link}>
								<Link href="/">Настроить ленту</Link>
							</li>
							<li className={styles.link}>
								<Link href="/">
									Установить приложение Windows
								</Link>
							</li>
							<li className={styles.link}>
								<Link href="/">Получить справку</Link>
							</li>
							<li className={styles.link}>
								<Link href="/">
									Просмотреть условия и политику...
								</Link>
							</li>
							<li className={styles.link}>
								<Link href="/">Выход</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHeaderMenu;
