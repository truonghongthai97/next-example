import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";

import { store } from "/store";
import "/styles/main.scss";

import Header from "/components/Header";
import Footer from "/components/Footer";

import "/styles/main.scss";

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
      <Footer />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
