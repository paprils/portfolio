import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const Container = (props) => {
  const { children, fluid } = props;
  if (fluid) {
    return <div className={css.containerFluid}>{children}</div>;
  } else {
    return <div className={css.container}>{children}</div>;
  }
};

Container.defaultProps = {
  fluid: false,
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

export default Container;
