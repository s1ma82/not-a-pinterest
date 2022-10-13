import {useEffect, useState} from 'react'
const useGetPhoto = params => {
	const [state, setState] = useState()
	const {id} = params
	useEffect(() => {
		const func = async () => {
			const res = await fetch(
				`${process.env.SITE_URL}/api/pinGenerate/${encodeURIComponent(
					id
				)}`
			)
			const data = (await res.json()).data
			setState(data)
		}
		func()
	}, [])
	const photo = state
	return [photo]
}
export default useGetPhoto
