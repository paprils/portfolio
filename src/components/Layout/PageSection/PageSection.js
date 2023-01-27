import React from "react";
import css from "./PageSection.module.scss";
import PropTypes from "prop-types";

const PageSection = (props) => {
  const { children, showLine, anchor } = props;

  return (
    <div className={css.pageSection} data-show-line={showLine} id={anchor}>
      {children}
    </div>
  );
};

PageSection.propTypes = {
  children: PropTypes.node,
  showLine: PropTypes.bool,
  anchor: PropTypes.string,
};

export default PageSection;
