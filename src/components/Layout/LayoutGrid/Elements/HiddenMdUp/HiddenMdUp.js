import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const HiddenMdUp = (props) => {
  const { children } = props;
  return (
    <div className={`${css.hiddenMd} ${css.hiddenLg} ${css.hiddenXl}`}>
      {children}
    </div>
  );
};

HiddenMdUp.propTypes = {
  children: PropTypes.node,
};

export default HiddenMdUp;
