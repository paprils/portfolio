import Page from "@/components/Layout/Page";
import Hero from "@/components/Sections/Hero/Hero";
import React from "react";
import Work from "@/components/Sections/Work/Work";
import Experience from "@/components/Sections/Experience";
import Contact from "@/components/Sections/Contact";
import Illustrations from "@/components/Sections/Illustrations";

const HomePage = () => {
  return (
    <Page>
      <Hero />
      <Work />
      <Illustrations />
      <Experience />
      <Contact />
    </Page>
  );
};

export default HomePage;
