import S from "./style.module.scss";
console.log("🚀 ~ file: index.js ~ line 2 ~ S", S);
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Child from "./Child";

export default function Footer({ classes = {} }) {
  const { t } = useTranslation("footer");

  return (
    <div className={`${S.container} ${classes.root}`}>
      <hr />
      <p>Footer: {t("help")}</p>
      <p className="title">123</p>

      <Child classes={{ root: classes.child }} />
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
