import {unsplash} from '.'

export default async function handler(req, res) {
	try {
		const id = req.body.id
		const reqResult = await unsplash.photos.get({ photoId: id })
		switch (reqResult.type) {
			case "error": return res.status(500).json({ error: reqResult.errors[0] })
			case "success": return res.status(200).json({ data: reqResult.response })
			default: throw "Unsplash не ответил на запрос"
		}
	} catch (e) {
		return res.status(400).json({error: `ошибка: ${e.message}`})
	}
}
