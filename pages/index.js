import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Meta from "/components/Meta";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "/components/Footer";

import S from "/styles/pages/Home.module.scss";
import commonS from "/styles/pages/common.module.scss";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  const locale = router.locale;
  const { t } = useTranslation("common");

  return (
    <>
      <Meta title="Home" description="Home description" />
      <div className={S.container}>
        <Link href="/about">About</Link>
        <Image
          src="/images/profile.jpg"
          alt="Picture of the author"
          width="64"
          height="64"
        />
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>

        {t("about_us")}

        <div className={commonS.box}>123</div>

        <p>123</p>

        <div className={commonS.box}>456</div>

        <Footer />
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
