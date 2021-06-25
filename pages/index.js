import Meta from "/components/Meta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "/store/counterSlice";

import { fetchUser } from "/store/userSlice";

import S from "/styles/pages/Home.module.scss";
import { useEffect } from "react";

export default function Home() {
  const count = useSelector(selectCount);
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(111, user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Meta title="Home" description="Home description" />
      <div className={S.container}>
        <div>count: {count}</div>

        {loading ? <div>Loading...</div> : <div>User: {user.name}</div>}

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          incrementByAmount
        </button>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
