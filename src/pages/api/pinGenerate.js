import { unsplash } from ".";

export default async function handler(req, res) {
	try {
		const { pid } = req.query;
		console.log(pid);
		// await unsplash.photos.get({});
	} catch {}
}
