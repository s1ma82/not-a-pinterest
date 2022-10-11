import { useEffect, useState } from "react";

const useRandomPhotos = (params) => {
	const [state, setState] = useState();
	const { req, setReq } = params;

	useEffect(() => {
		const func = async () => {
			if (req === 1) return;
			const res = await fetch(`${process.env.SITE_URL}/api/randomPhotos`);
			const data = (await res.json()).data.response;
			setState(data);
			setReq(1);
		};
		func();
	}, [req, setReq]);
	const randomPhotos = state;

	return [randomPhotos];
};

export default useRandomPhotos;
