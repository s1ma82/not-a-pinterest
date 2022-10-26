import React, {memo} from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import {generateImgParams} from '../../helpers'
import {Pin} from '../'
import styles from './MasonryGrid.module.scss'


const MasonryGrid = ({content}) => {
	const pins = content.map((i, index) => {
		const params = generateImgParams(i.height, i.width, 236)
		i.params = params
		return <Pin data={i} key={`PinID:${i.id}#${index}`} />
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
			}}>
			<Masonry gutter={'10px'}>{pins.map(i => i)}</Masonry>
		</ResponsiveMasonry>
	)
}

export default memo(MasonryGrid)
