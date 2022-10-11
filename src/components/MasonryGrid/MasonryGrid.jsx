import React, {memo} from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {Pin} from "../"
import styles from "./MasonryGrid.module.scss"

const setParams = (h, w) => {
	const height = +String(h).substring(-1),
		width = +String(w).substring(-1),
		ratio = height / width,
		newWidth = 240,
		newHeight = newWidth * ratio;

	return {
		height: newHeight,
		width: newWidth,
	};
};

const MasonryGrid = ({ content }) => {
	console.log(content)
	const pins = content.map((i, index) => {
    	const params = setParams(i.height, i.width)
		i.params = params
		return <Pin data={i} key={`PinID:${i.id}`}/>
	})

    return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{
				260: 1,
				510: 2,
				750: 3,
				1000: 4,
				1240: 5,
				1500: 6,
				1740: 7,
			}}
		>
			<Masonry gutter={"10px"}>
				{pins.map(i => i)}
			</Masonry>
		</ResponsiveMasonry> 
	);
}

export default memo(MasonryGrid);
