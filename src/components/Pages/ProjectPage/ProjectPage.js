import Header from "@/components/Typography/Header";
import Text from "@/components/Typography/Text";
import Page from "@/components/Layout/Page";
import React from "react";
import PropTypes from "prop-types";
import css from "./ProjectPage.module.scss";
import Image from "next/image";

const ProjectPage = (props) => {
  const { title, description, gallery } = props;

  return (
    <Page>
      <Header type={"h1"} style={"h2"} align={"center"} marginBottom={50}>
        {title}
      </Header>

      <div className={css.projectPage__description}>
        <Text align={"center"}>{description}</Text>
      </div>

      {gallery.map((item) => {
        return (
          <div className={css.projectPage__image} key={item}>
            <Image
              src={item}
              key={item}
              alt={title}
              layout={"fill"}
              objectFit={"contain"}
              priority={true}
            />
          </div>
        );
      })}
    </Page>
  );
};

ProjectPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  gallery: PropTypes.array,
};

export default ProjectPage;
