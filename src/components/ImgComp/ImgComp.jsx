import React from "react";
import Image from "next/image";
const ImgComp = ({data}) => {
	const { urls, alt_description, params } = data
	return (
		<Image
			alt={alt_description || "image"}
			src={urls.small || "aboba"}
			{...params}
			style={{ borderRadius: 16 }}
			placeholder="blur"
			blurDataURL={urls.thumb}
		/>
	);
};

export default ImgComp;
