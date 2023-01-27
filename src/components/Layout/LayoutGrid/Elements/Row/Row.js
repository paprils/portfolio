import React from "react";
import css from "../../LayoutGrid.module.scss";
import PropTypes from "prop-types";

const Row = (props) => {
  const { children, justifyContent, alignItems, gapSize } = props;

  return (
    <div
      className={css.row}
      data-gapsize={gapSize}
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  gapSize: "normal",
  justifyContent: "flex-start",
  alignItems: "initial",
};

Row.propTypes = {
  gapSize: PropTypes.oneOf(["small", "medium", "normal"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "center",
  ]),
  alignItems: PropTypes.oneOf(["flex-start", "flex-end", "center", "initial"]),
  children: PropTypes.node,
};

export default Row;
