import '../src/styles/globals.css'
import '../src/styles/layout.css'
import '../src/styles/index.css'
import Layout from '../src/components/layout/layout'

function MyApp({ Component, pageProps }) {
  return(<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp
