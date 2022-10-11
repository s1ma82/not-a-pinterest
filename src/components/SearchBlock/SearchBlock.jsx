import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CloseIcon, SearchIcon } from "../imgs";
import { useOutside } from "../../hooks";
import styles from "./SearchBlock.module.scss";

const SearchBlock = () => {
	const [input, setInput] = useState("");
	const [activityState, setActivityState] = useOutside([
		`.${styles.search_active}`,
	]);
	let inputElement = null;

	return (
		<div
			id="searchBlock"
			onClick={(e) => {
				if (e.target.closest("button")) return;
				if (!activityState) if (inputElement) inputElement.focus();
				setActivityState(true);
			}}
			className={`${styles.search} ${
				activityState ? styles.search_active : ""
			}`}
		>
			<div
				className={`${styles.search__icon} ${
					!activityState
						? input.length === 0
							? styles.search__icon_active
							: ""
						: ""
				}`}
			>
				<SearchIcon />
			</div>
			<input
				ref={(i) => (inputElement = i)}
				name="searchBlockInput"
				onChange={(e) => setInput(e.target.value)}
				type="text"
				placeholder="Поиск"
				value={input}
				className={styles.search__input}
			/>
			<button
				onClick={() => {
					setInput("");
					setActivityState(false);
				}}
				className={`${styles["search__btn-delete"]} ${
					input.length !== 0 || activityState
						? styles["search__btn-delete_active"]
						: ""
				}`}
			>
				<CloseIcon />
			</button>
		</div>
	);
};

export default SearchBlock;
