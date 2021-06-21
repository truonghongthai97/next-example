import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Meta from "/components/Meta";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Meta title="About" description="about description" />
      <div>
        <Link href="/">Home</Link>
        <p>Locales: {t("about_us")}</p>
        <p>Locales: {t("footer:help")}</p>
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
