import React, { useContext } from "react";
import { Container, HiddenSmDown } from "@/components/Layout/LayoutGrid";
import css from "./Navigation.module.scss";
import Link from "next/link";
import useNavigation from "./Navigation.hook";
import Text from "@/components/Typography/Text";
import slugify from "slugify";
import { AnchorContext } from "@/contexts/anchor";

const Navigation = () => {
  const { menu } = useNavigation();
  const { activeAnchor } = useContext(AnchorContext);

  return (
    <div className={css.navigation__wrapper}>
      <Container>
        <nav className={css.navigation}>
          <div className={css.navigation__logo}>
            <Link href={"/"}>Pat Strulak</Link>
          </div>

          <HiddenSmDown>
            <ul className={css.navigation__list}>
              <li className={css.navigation__list__item}></li>
              {menu.map((item) => {
                return (
                  <li
                    className={css.navigation__list__item}
                    key={item.title}
                    data-active={
                      slugify(activeAnchor) ===
                      slugify(item.title.toLowerCase())
                    }
                  >
                    <Link href={item.link}>
                      <a>
                        <Text opacity={1}>{item.title}</Text>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </HiddenSmDown>
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
