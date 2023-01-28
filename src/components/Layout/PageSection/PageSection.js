import React, { useRef } from "react";
import css from "./PageSection.module.scss";
import PropTypes from "prop-types";
import usePageSection from "@/components/Layout/PageSection/PageSection.hook";

const PageSection = (props) => {
  const { children, showLine, anchor } = props;
  const sectionRef = useRef();

  usePageSection(sectionRef, props);

  return (
    <div
      className={css.pageSection}
      data-show-line={showLine}
      id={anchor}
      ref={sectionRef}
    >
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
