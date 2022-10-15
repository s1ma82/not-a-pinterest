export default async function ({ setState: setState, setReq: setReq, req: req }) {

	if (req === 1) return
	const res = await fetch(`${process.env.API_PATHS.randomPhotos}`)
	const data = (await res.json()).data.response
	setState(data)
	setReq(1)
}
