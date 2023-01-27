import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const HiddenSmUp = (props) => {
  const { children } = props;
  return (
    <div
      className={`${css.hiddenSm} ${css.hiddenMd} ${css.hiddenLg} ${css.hiddenXl}`}
    >
      {children}
    </div>
  );
};

HiddenSmUp.propTypes = {
  children: PropTypes.node,
};

export default HiddenSmUp;
