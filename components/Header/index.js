import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import S from "./style.module.scss";
import { useTranslation } from "next-i18next";

import useWindowSize from "/hooks/useWindowSize";
import useOnClickOutside from "/hooks/useOnClickOutside";

export default function Header() {
  const { t } = useTranslation("footer");
  const containerRef = useRef();
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(true);
  const size = useWindowSize();

  useOnClickOutside(containerRef, () => {
    if (size.width < 768) {
      setIsOpenNavMenu(false);
    }
  });

  useEffect(() => {
    if (size.width < 768) {
      setIsOpenNavMenu(false);
      return;
    }

    setIsOpenNavMenu(true);
  }, [size]);

  return (
    <header className={S.navbar}>
      <div className={S.container} ref={containerRef}>
        <h1 className={S.logo}>
          <Link href="/">Logo</Link>
        </h1>

        <button
          className={S.collapse_icon}
          onClick={() => setIsOpenNavMenu(!isOpenNavMenu)}
        >
          {t("123")}
        </button>

        {isOpenNavMenu && (
          <nav className={S.nav_menu}>
            <Link href="/">
              <a className={S.nav_menu__item}>Home</a>
            </Link>
            <Link href="/about">
              <a className={S.nav_menu__item}>Our Trips</a>
            </Link>
            <Link href="/">
              <a className={S.nav_menu__item}>Supports</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
