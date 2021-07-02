import NextNprogress from 'nextjs-progressbar'
import GlobalStyle from '../styles/global'
import '../styles/styles.scss'

const MyApp = ({ Component, pageProps }) =>
  <>
    <GlobalStyle />
    <NextNprogress />
    <Component {...pageProps} />
  </>

export default MyApp