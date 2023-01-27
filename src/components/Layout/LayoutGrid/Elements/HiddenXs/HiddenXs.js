import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const HiddenXs = (props) => {
  const { children } = props;
  return <div className={`${css.hiddenXs}`}>{children}</div>;
};

HiddenXs.propTypes = {
  children: PropTypes.node,
};

export default HiddenXs;
