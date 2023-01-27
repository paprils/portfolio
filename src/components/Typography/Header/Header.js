import React from "react";
import PropTypes from "prop-types";
import css from "./Header.module.scss";

const Header = (props) => {
  const { type, style, color, children, align, marginBottom, marginTop } =
    props;

  const headerProps = {
    className: css[style],
    "data-color": color,
    "data-align": align,
    style: { marginBottom: marginBottom + "px", marginTop: marginTop + "px" },
  };

  switch (type) {
    case "h1":
      return <h1 {...headerProps}>{children}</h1>;

    case "h2":
      return <h2 {...headerProps}>{children}</h2>;

    case "h3":
      return <h3 {...headerProps}>{children}</h3>;
  }
};

Header.defaultProps = {
  type: "h2",
  style: "h1",
  color: "black",
  marginBottom: 0,
  marginTop: 0,
};

Header.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3"]),
  style: PropTypes.oneOf(["h1", "h2", "h3"]),
  color: PropTypes.oneOf(["black", "accent"]),
  children: PropTypes.node,
  align: PropTypes.oneOf(["left", "center", "right"]),
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
};

export default Header;
