import React from "react";
import css from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const { label, onClick, onMouseEnter, onMouseLeave } = props;

  return (
    <button
      className={css.button}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Button;
