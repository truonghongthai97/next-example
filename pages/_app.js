import { appWithTranslation } from 'next-i18next';
import "/styles/main.scss";

import Header from '/components/Header'

export function reportWebVitals(metric) {
  // console.log(111, metric);
}

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <footer>footer</footer>
  </>;
}

export default appWithTranslation(MyApp);
