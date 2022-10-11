import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRandomPhotos } from "../../hooks";
import { ImgComp, Loader, MasonryGrid, Pin } from "../../components";
import styles from "./NotPinterestContent.module.scss";

const NotPinterestContent = () => {
	const [req, setReq] = useState(1)
	const [content, setContent] = useState([])
	const trigger = useRef() 
	const [randomPhotos] = useRandomPhotos({ req, setReq }) 
	const handleObserver = useCallback( () => {
		setReq(0)
	}, [])

	useEffect( () => {
		if (!randomPhotos) return
		const newState = content.concat(randomPhotos)
		setContent(newState)
	}, [randomPhotos])

	useEffect(() => {
		const comp = trigger.current
		const option = {
			root: null,
			rootMargin: "200%",
			threshold: 0
		}
		const observer = new IntersectionObserver(handleObserver, option)
		observer.observe(comp)
	}, [handleObserver])
	return (
		<div className={styles.container}>
			{content.length !== 0 ? <MasonryGrid content={content} /> : null}
			<div ref={trigger}/>
		</div>
	);
};

export default NotPinterestContent;
