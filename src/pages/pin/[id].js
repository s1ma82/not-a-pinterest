import React, { useEffect } from "react";
import { useGetPhoto } from "../../hooks";
const Pin = ({ data }) => {
	const [photo] = useGetPhoto({ id: data.id });
	useEffect(() => {
		console.log(photo);
	}, [photo]);
	return <div>PIN</div>;
};

export const getStaticPaths = async () => {
	return {
		paths: {
			data,
		},
		fallback: false,
	};
};
export const getStaticProps = async () => {
	return {
		props: {},
	};
};
export default Pin;
