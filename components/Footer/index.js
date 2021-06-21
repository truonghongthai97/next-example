import S from "./style.module.scss";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <div>
      <hr />
      <p>Footer: {t("help")}</p>
    </div>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["footer"])),
//     },
//   };
// }
