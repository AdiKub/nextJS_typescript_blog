import NextNprogress from 'nextjs-progressbar'
import GlobalStyle from '../styles/global'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <NextNprogress/>
      <Component {...pageProps} />
    </>
  )
}
