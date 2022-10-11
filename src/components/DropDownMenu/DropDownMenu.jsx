import React, { useState, useEffect } from "react";
import styles from "./DropDownMenu.module.scss";
import { DropDownMenuIcon } from "../imgs";
import { useOutside } from "../../hooks";

const DropDownMenu = ({ children, title, soLeft, NotPinterestLogo }) => {
	const [activityState, setActivityState] = useOutside([
		`[data-menu-filter=${title}]`,
	]);

	const ChildrenLinks = () => (
		<>
			{React.Children.map(children, (child) => {
				return <li>{React.cloneElement(child)}</li>;
			})}
		</>
	);
	const Icon = () =>
		NotPinterestLogo ? (
			<NotPinterestLogo className={styles.main_icon} />
		) : null;
	return (
		<div className={styles.menu} data-menu-filter={title}>
			<button
				onClick={() => setActivityState(!activityState)}
				className={`${styles.menu__button} ${
					activityState ? styles.menu__button_active : ""
				}`}
			>
				<Icon />
				{title}
				<div className={styles.icon_wrapper}>
					<DropDownMenuIcon className={styles.icon} />
				</div>
			</button>
			<div
				className={`${styles.links_wrapper} ${
					activityState ? styles.links_wrapper_active : ""
				} ${soLeft ? styles.soLeft : ""}`}
			>
				<ul
					className={styles.links}
					onClick={(e) =>
						e.target.closest("li").tagName === "LI"
							? setActivityState(false)
							: {}
					}
				>
					<ChildrenLinks />
				</ul>
			</div>
		</div>
	);
};

export default DropDownMenu;
