import React from "react";
import PageSection from "@/components/Layout/PageSection";
import Header from "@/components/Typography/Header";
import Text from "@/components/Typography/Text";
import Link from "next/link";
import useExperience from "@/components/Sections/Experience/Experience.hook";
import css from "./Experience.module.scss";
import { isNumberEven } from "@/helpers/isNumberEven";
import { motion } from "framer-motion";

const Experience = () => {
  const { experience } = useExperience();

  return (
    <PageSection anchor={"about"}>
      <Header type={"h2"} style={"h2"} align={"center"} marginBottom={40}>
        About me & experience
      </Header>

      <Text align={"center"}>
        Hi! My name is Patrycja and for most of my career I’ve been working as a
        creative graphic designer. I’ve finished graphic design studies and have
        over 8 years of experience in design. My responsibilities as a designer
        consisted of designing digital and print content, hosting meetings with
        clients, co-hosting tender presentations, coming up with new themes of
        upcoming catalogues, preparing mood boards and executing them during
        photo sessions.
        <br />
        <br />
        However for the past year I’ve been working as a Junior React Developer,
        which allowed me to get familiar with HTML, CSS, JS and React. I can
        also create simple and a little more complex web animations using Rive
        app.
        <br />
        <br />
        In my free time I like to create illustrations, play video games and
        create cosplay costumes.
        <br />
        <br />
        Interested?
      </Text>

      <Text align={"center"} opacity={1}>
        <Link href={"#contact"}>
          <a>Let’s get in touch!</a>
        </Link>
      </Text>

      <ul className={css.timeline}>
        {experience.map((job, index) => {
          return (
            <motion.li
              className={css.timeline__item}
              key={job.title}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false }}
              variants={{
                offscreen: {
                  x: isNumberEven(index) ? 200 : -200,
                  opacity: 0,
                },
                onscreen: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1,
                  },
                },
              }}
            >
              <Header type={"h3"} style={"h3"}>
                {job.period}
              </Header>
              <br />
              <Header type={"h3"} style={"h3"} color={"accent"}>
                {job.title}
              </Header>
              <div className={css.timeline__item__description}>
                <Text>{job.description}</Text>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </PageSection>
  );
};

export default Experience;
