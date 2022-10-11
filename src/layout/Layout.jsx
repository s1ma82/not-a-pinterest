import React from "react";
import Header from "./Header/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};
const withLayout = (Component) =>
	function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
export default withLayout;
