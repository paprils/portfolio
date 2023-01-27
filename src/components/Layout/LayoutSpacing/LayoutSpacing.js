import PropTypes from "prop-types";
import React from "react";
import css from "./LayoutSpacing.module.scss";

const LayoutSpacing = ({ height, lg, md, sm, xs, xxs }) => {
  let heightXl = css["height-" + height];
  let heightLg = lg ? " " + css["lg-height-" + lg] : "";
  let heightMd = md ? " " + css["md-height-" + md] : "";
  let heightSm = sm ? " " + css["sm-height-" + sm] : "";
  let heightXs = xs ? " " + css["xs-height-" + xs] : "";
  let heightXxs = xxs ? " " + css["xxs-height-" + xxs] : "";
  let classes = `${heightXl}${heightLg}${heightMd}${heightSm}${heightXs}${heightXxs}`;

  return <div className={classes} />;
};

LayoutSpacing.defaultProps = {
  height: 20,
};

LayoutSpacing.propTypes = {
  height: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
    80, 90, 100, 110, 120, 130, 140, 150,
  ]),
  lg: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
    80, 90, 100, 110, 120, 130, 140, 150,
  ]),
  md: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
    80, 90, 100, 110, 120, 130, 140, 150,
  ]),
  sm: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
    80, 90, 100, 110, 120, 130, 140, 150,
  ]),
  xs: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
    80, 90, 100, 110, 120, 130, 140, 150,
  ]),
  xxs: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70,
    80, 90, 100, 110, 120, 130, 140, 150,
  ]),
};

export default LayoutSpacing;
