import { appWithTranslation } from 'next-i18next';

import "../styles/globals.css";

export function reportWebVitals(metric) {
  console.log(111, metric);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
