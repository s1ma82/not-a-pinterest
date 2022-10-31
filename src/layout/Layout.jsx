import React from 'react'
import { Provider } from 'react-redux'
import Modal from '../components/Modal/Modal'
import { store } from '../redux/store'
import Header from './Header/Header'

const Layout = ({ children }) => {
	return (
		<>
			<Provider store={store}>
				<Header />
					<main>{children}</main>
				<Modal/>
			</Provider>
		</>
	)
}
const withLayout = Component =>
	function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
export default withLayout
