import React from "react";
import css from "./Text.module.scss";
import PropTypes from "prop-types";

const Text = (props) => {
  const { children, opacity, align } = props;

  return (
    <span className={css.text} style={{ opacity: opacity, textAlign: align }}>
      {children}
    </span>
  );
};

Text.defaultProps = {
  opacity: 0.5,
};

Text.propTypes = {
  children: PropTypes.node,
  opacity: PropTypes.number,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default Text;
