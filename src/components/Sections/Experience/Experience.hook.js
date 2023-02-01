import { useState } from "react";

const useExperience = () => {
  const [activeTab, setActiveTab] = useState("Work");

  const experience = [
    {
      period: "nov 2021 - current",
      title: "Junior React Developer\nThe Fat Cat",
      description:
        "- HTML, CSS, JS, React, Typescript, NextJS, CMS\n- Creating app’s and website’s layouts based on provided designs\n- Working with external npm libraries\n- Co-creating project documentations (storybook)",
    },
    {
      period: "sep 2017 - nov 2021",
      title: "Creative Graphic Designer\nGutenberg Agency",
      description:
        "- Designing digital and print content\n- Co-hosting customer sessions\n- Coming up with themes of catalogues\n- Preparing moodboards and executing it during photo sessions",
    },
    {
      period: "jul 2013 - may 2017",
      title: "Graphic Designer\nMyGiftDna",
      description:
        "- Designing digital and print content\n- Operating 3D Printer and laser cutter\n- Customer service",
    },
  ];

  const education = [
    {
      period: "aug 2021",
      title: "Google UX Design Certificate",
      description: "- Online UX Design Course on Coursera",
    },
    {
      period: "aug 2021",
      title:
        "Johns Hopkins University\nHTML, CSS, and Javascript for Web Developers",
      description: "- Online HTML, CSS, JS Course on Coursera",
    },
    {
      period: "oct 2013 - aug 2017",
      title:
        "Wyższa Szkoła Informatyki Stosowanej i Zarządzania WIT w Warszawie",
      description: "- Bachelor's degree in graphic design",
    },
    {
      period: "sep 2011 - aug 2013",
      title: "Professionshøjskolen UCN",
      description: "- AP degree in graphic design",
    },
  ];

  return { experience, activeTab, setActiveTab, education };
};

export default useExperience;
