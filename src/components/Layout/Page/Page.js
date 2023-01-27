import React from "react";
import { Container } from "@/components/Layout/LayoutGrid";
import css from "./Page.module.scss";
import PropTypes from "prop-types";
import Navigation from "@/components/Layout/Navigation";

const Page = (props) => {
  const { children } = props;

  return (
    <div className={css.page}>
      <Navigation />
      <div className={css.page__navigationPush} />
      <Container>{children}</Container>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
