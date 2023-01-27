import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const HiddenSmDown = (props) => {
  const { children } = props;
  return (
    <div className={`${css.hiddenSm} ${css.hiddenXs} ${css.hiddenXxs}`}>
      {children}
    </div>
  );
};

HiddenSmDown.propTypes = {
  children: PropTypes.node,
};

export default HiddenSmDown;
