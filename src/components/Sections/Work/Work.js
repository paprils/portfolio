import React from "react";
import css from "./Work.module.scss";
import PageSection from "@/components/Layout/PageSection";
import useWork from "@/components/Sections/Work/Work.hook";
import Header from "@/components/Typography/Header";
import Text from "@/components/Typography/Text";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "@/components/Layout/LayoutGrid";
import LayoutSpacing from "@/components/Layout/LayoutSpacing";
import { isNumberEven } from "@/helpers/isNumberEven";

const Work = () => {
  const { work } = useWork();

  return (
    <PageSection anchor={"work"}>
      <Header type={"h2"} style={"h2"} align={"center"}>
        Work
      </Header>

      {work.map((project, index) => {
        return (
          <Row alignItems={"center"} key={project.title}>
            <Col
              lg={6}
              orderXl={isNumberEven(index) ? 1 : 2}
              orderLg={isNumberEven(index) ? 1 : 2}
            >
              <div className={css.work__image}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout={"fill"}
                  objectFit={"contain"}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className={css.work__text}>
                <Header type={"h3"} style={"h3"}>
                  {project.title}
                </Header>
                <LayoutSpacing />
                <Text>{project.description}</Text>
                <LayoutSpacing />
                <Text opacity={1}>
                  <Link href={project.link}>
                    <a>See project</a>
                  </Link>
                </Text>
              </div>
            </Col>
          </Row>
        );
      })}
    </PageSection>
  );
};

export default Work;