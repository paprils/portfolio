import React from "react";
import css from "./Text.module.scss";
import PropTypes from "prop-types";

const Text = (props) => {
  const { children, opacity, align, color } = props;

  return (
    <span
      className={css.text}
      style={{ opacity: opacity, textAlign: align }}
      data-color={color}
    >
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
  color: PropTypes.oneOf(["accent", "black"]),
};

export default Text;
