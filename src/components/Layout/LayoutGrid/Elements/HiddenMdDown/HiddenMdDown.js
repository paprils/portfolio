import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const HiddenMdDown = (props) => {
  const { children } = props;
  return (
    <div
      className={`${css.hiddenMd} ${css.hiddenSm} ${css.hiddenXs} ${css.hiddenXxs}`}
    >
      {children}
    </div>
  );
};

HiddenMdDown.propTypes = {
  children: PropTypes.node,
};

export default HiddenMdDown;
