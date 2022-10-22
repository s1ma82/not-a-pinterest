import {useEffect, useState} from 'react'
import {randomPhotosQuery} from '../helpers'

const useRandomPhotos = params => {
	const [state, setState] = useState()
	const {req, setReq} = params
	useEffect(() => {
		randomPhotosQuery({setState, req, setReq})
	}, [req, setReq])
	const randomPhotos = state

	return [randomPhotos]
}

export default useRandomPhotos
