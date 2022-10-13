import {unsplash} from '.'

export default async function handler(req, res) {
	try {
		await unsplash.photos.getRandom({count: 30}).then(data => {
			return res.status(200).json({data})
		})
	} catch {
		res.status(500).json({data: 'Сервер даун'})
	}
}
