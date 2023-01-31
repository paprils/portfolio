import React from "react";
import PageSection from "@/components/Layout/PageSection";
import Header from "@/components/Typography/Header";
import Text from "@/components/Typography/Text";
import Link from "next/link";
import useExperience from "@/components/Sections/Experience/Experience.hook";
import Tabs from "@/components/Elements/Tabs";
import LayoutSpacing from "@/components/Layout/LayoutSpacing";
import Work from "@/components/Sections/Experience/Elements/Work";
import Education from "@/components/Sections/Experience/Elements/Education";

const Experience = () => {
  const { activeTab, setActiveTab } = useExperience();

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

      <LayoutSpacing height={50} />
      <Tabs
        tabs={["Work", "Education"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "Work" && <Work />}
      {activeTab === "Education" && <Education />}
    </PageSection>
  );
};

export default Experience;
