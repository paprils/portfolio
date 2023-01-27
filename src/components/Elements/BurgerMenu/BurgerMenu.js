import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import PropTypes from "prop-types";

const BurgerMenu = (props) => {
  const { toggled, toggle } = props;

  return (
    <Hamburger
      rounded={true}
      label="Show menu"
      size={20}
      toggled={toggled}
      toggle={toggle}
      color={'black'}
    />
  );
};

BurgerMenu.propTypes = {
  toggled: PropTypes.bool,
  toggle: PropTypes.func,
};

export default BurgerMenu;
