import React from "react";
import css from "./Hero.module.scss";
import { Col, Row } from "@/components/Layout/LayoutGrid";
import Header from "@/components/Typography/Header";
import Text from "@/components/Typography/Text";
import Image from "next/image";
import PageSection from "@/components/Layout/PageSection";
import Link from "next/link";

const Hero = () => {
  return (
    <PageSection>
      <Row>
        <Col xl={5} lg={6} md={6} sm={12}>
          <div className={css.hero}>
            <Header style={"h2"} type={"h2"}>
              Hi, I’m
            </Header>
            <br />
            <Header style={"h1"} type={"h1"}>
              Patrycja
            </Header>
            <br />

            <Header style={"h2"} type={"h2"}>
              and I <span style={{ color: "#F80F66" }}>create & code</span>
            </Header>

            <br />
            <br />
            <Text style={"h2"} color={"accent"}>
              <div className={css.hero__description}>
                For most of my career I’ve been working as a creative <br />
                graphic designer and for the past year I’ve been <br />
                working as a Junior React Developer.
              </div>
            </Text>
            <br />
            <br />
            <Link href={"#about"}>
              <a>
                <Header style={"h3"} type={"h3"} color={"accent"}>
                  read more
                </Header>
              </a>
            </Link>
            <br />
          </div>
        </Col>
        <Col xl={7} lg={6} md={6} sm={12}>
          <div className={css.hero__portrait}>
            <Image
              src={"/portrait.svg"}
              layout={"fill"}
              alt={"Pat Strulak portrait"}
              priority={true}
            />
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

export default Hero;
