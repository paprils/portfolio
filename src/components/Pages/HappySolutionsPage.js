import ProjectPage from "@/components/Pages/ProjectPage";
import React from "react";

const HappySolutionsPage = () => {
  return (
    <ProjectPage
      gallery={[
        "/happy-solutions/1.jpg",
        "/happy-solutions/2.jpg",
        "/happy-solutions/3.jpg",
        "/happy-solutions/4.jpg",
        "/happy-solutions/5.jpg",
        "/happy-solutions/6.jpg",
      ]}
      title={"UI Design for Happy Solutions"}
      description={
        "Happy Solutions is an app for tracking employees work time, vacations and invoices."
      }
    />
  );
};

export default HappySolutionsPage;
