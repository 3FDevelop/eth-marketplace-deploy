import { BaseLayout } from '@components/ui/layout'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<BaseLayout>
			<Component {...pageProps} />
			<ToastContainer/>
		</BaseLayout>
	)
}

export default MyApp
