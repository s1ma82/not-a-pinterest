const generateImgParams = (h, w, newWidth) => {
	const height = +String(h).substring(-1),
		width = +String(w).substring(-1),
		ratio = height / width,
		newHeight = Math.floor(newWidth * ratio)

	return {
		height: newHeight,
		width: newWidth,
	}
}
export default generateImgParams