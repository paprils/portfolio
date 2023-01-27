import React from "react";
import useCol from "./Col.logic";
import PropTypes from "prop-types";

const Col = (props) => {
  const { children } = props;
  const { classes } = useCol(props);
  return <div className={classes}>{children}</div>;
};

Col.defaultProps = {
  xs: 12,
  sm: "",
  md: "",
  lg: "",
  xl: "",
  orderXs: "",
  orderSm: "",
  orderMd: "",
  orderLg: "",
  orderXl: "",
  flex: false,
  noPaddingRight: false,
  noPaddingLeft: false,
};

Col.propTypes = {
  xs: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  sm: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  md: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  lg: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  xl: PropTypes.oneOf(["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  orderXs: PropTypes.oneOf(["", 1, 2, 3, 4]),
  orderSm: PropTypes.oneOf(["", 1, 2, 3, 4]),
  orderMd: PropTypes.oneOf(["", 1, 2, 3, 4]),
  orderLg: PropTypes.oneOf(["", 1, 2, 3, 4]),
  orderXl: PropTypes.oneOf(["", 1, 2, 3, 4]),
  flex: PropTypes.bool,
  noPaddingRight: PropTypes.bool,
  noPaddingLeft: PropTypes.bool,
  children: PropTypes.node,
};

export default Col;
