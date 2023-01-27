import React from "react";
import Link from "next/link";
import { Container, HiddenLgUp } from "@/components/Layout/LayoutGrid";
import BurgerMenu from "@/components/Elements/BurgerMenu";
import css from "@/components/Layout/Navigation/Navigation.module.scss";
import useNavigation from "@/components/Layout/Navigation/Navigation.hook";
import Text from "@/components/Typography/Text";

const NavigationMobile = () => {
  const { click, setClick, closeMobileMenu, menu } = useNavigation();

  return (
    <HiddenLgUp>
      <div
        className={
          !click
            ? css.navigation__wrapper
            : `${css.navigation__wrapper} ${css.navigation__wrapper__active}`
        }
      >
        <Container>
          <div
            className={css.navigation__burger}
            onClick={() => setClick(!click)}
          >
            <BurgerMenu toggled={click} toggle={setClick} />
          </div>
          <nav className={css.navigation}>
            <div className={css.navigation__logo}>
              <Link href={"/"}>Pat Strulak</Link>
            </div>
            <ul className={css.navigation__list__mobile} data-click={click}>
              {menu.map((item) => {
                return (
                  <li
                    className={css.navigation__list__item}
                    key={item.title}
                    onClick={closeMobileMenu}
                  >
                    <Link href={item.link}>
                      <Text size={"small"}>{item.title}</Text>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </HiddenLgUp>
  );
};

export default NavigationMobile;
