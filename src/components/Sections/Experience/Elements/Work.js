import css from "@/components/Sections/Experience/Experience.module.scss";
import { motion } from "framer-motion";
import { isNumberEven } from "@/helpers/isNumberEven";
import Header from "@/components/Typography/Header";
import Text from "@/components/Typography/Text";
import React from "react";
import useExperience from "@/components/Sections/Experience/Experience.hook";

const Work = () => {
  const { experience } = useExperience();

  return (
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
  );
};

export default Work;
