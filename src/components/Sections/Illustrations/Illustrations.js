import React from "react";
import PageSection from "@/components/Layout/PageSection";
import Header from "@/components/Typography/Header";
import Gallery from "@/components/Elements/Gallery";
import useIllustrations from "@/components/Sections/Illustrations/Illustrations.hook";

const Illustrations = () => {
  const { gallery } = useIllustrations();

  return (
    <PageSection anchor={"illustrations"}>
      <Header type={"h2"} style={"h2"} align={"center"} marginBottom={50}>
        Illustrations & hobby
      </Header>
      <Gallery gallery={gallery} />
    </PageSection>
  );
};

export default Illustrations;
