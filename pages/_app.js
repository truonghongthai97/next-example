import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";

import { store } from '/store'

import "/styles/main.scss";
import Header from "/components/Header";

// export function reportWebVitals(metric) {
//   console.log(111, metric);
// }

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>footer</footer>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
