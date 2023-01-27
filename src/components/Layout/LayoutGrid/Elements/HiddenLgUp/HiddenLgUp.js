import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const HiddenLgUp = (props) => {
  const { children } = props;
  return <div className={`${css.hiddenLg} ${css.hiddenXl}`}>{children}</div>;
};

HiddenLgUp.propTypes = {
  children: PropTypes.node,
};
export default HiddenLgUp;
