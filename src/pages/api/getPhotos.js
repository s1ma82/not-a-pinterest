import { unsplash } from "./";

export default async function handler(req, res) {
	try {
		const data = await unsplash.search.getPhotos({
			query: "random",
			page: 1,
			perPage: 10,
			color: "random",
			orientation: "portrait",
		});
		return res.status(200).json({ data });
	} catch (e) {
		console.error("Ошибка в api/getPhotos \n Сообщение: " + e.message);
		return res
			.status(500)
			.json({ message: "Произошла непредвиденная бебра)" });
	}
}
