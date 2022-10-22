import axios from "axios"

export default async function (params) {
	const { id } = params
	const res = (await axios.post(process.env.API_PATHS.pinGenerate, {id})).data
	return res
}
