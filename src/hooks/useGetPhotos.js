import { useState } from "react";
const useGetPhotos = (requestState, query = null) => {
	const [state, setState] = useState();
	const { req, setReq } = requestState;
	// notabug
	const func = async () => {
		if (req === 1) return;
		const res = await fetch(`${process.env.SITE_URL}/api/getPhotos`);
		const data = (await res.json()).data;
		setState(data);
		setReq(1);
	};
	func();
	const getPhotos = state;
	return [getPhotos];
};
export default useGetPhotos;
