import GlobalStyle from '../theme/globalStyle';

export default function App({ Component, pageProps }) {
  return(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}