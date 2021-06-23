import { useState } from "react";
import dynamic from "next/dynamic";

import Loading from "/components/Loading";
import S from "/styles/pages/Home.module.scss";

const DynamicComponentWithCustomLoading = dynamic(
  import("/components/hello").then((mod) => mod.Hello),
  // eslint-disable-next-line react/display-name
  { loading: () => <Loading /> },
//   { loading: () => <Loading />, ssr: false },
);

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={S.container}>
      <p className={S.container__title}>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      {counter === 1 && <DynamicComponentWithCustomLoading />}
    </div>
  );
}
