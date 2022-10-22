import React from 'react'
import Image from 'next/image'
const ImgComp = ({data, type = 'default'}) => {
	const { urls, alt_description, params } = data
	
	return type === 'pin' ? (
		<Image
			alt={alt_description || "pin image"}
			src={urls.regular || "aboba"}
			{...params}
			style={{ borderRadius: 16 }}
			
		/>
	) :  (
		<Image
			alt={alt_description || 'image'}
			src={urls.small || 'aboba'}
			{...params}
			style={{borderRadius: 16}}
			placeholder='blur'
			blurDataURL={urls.thumb}
		/>
	)
}

export default ImgComp
