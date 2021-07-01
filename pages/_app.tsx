import NextNprogress from 'nextjs-progressbar'
import GlobalStyle from '../styles/global'
import '../styles/styles.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <NextNprogress/>
      <Component {...pageProps} />
    </>
  )
}
