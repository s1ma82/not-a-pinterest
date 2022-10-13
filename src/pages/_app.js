import withLayout from '../layout/Layout'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
	return <Component {...pageProps} />
}

export default withLayout(MyApp)
