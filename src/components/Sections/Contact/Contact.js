import React from "react";
import PageSection from "@/components/Layout/PageSection";
import Text from "@/components/Typography/Text";
import Header from "@/components/Typography/Header";

const Contact = () => {
  return (
    <PageSection showLine={false} anchor={"contact"}>
      <Header type={"h3"} style={"h3"} marginBottom={20}>
        Contact
      </Header>
      <Text opacity={1}>
        e-mail: <a href="mailto:pat.strulak@gmail.com">pat.strulak@gmail.com</a>
      </Text>
      <Text opacity={1}>phone: +48 603 863 280</Text>
      <br />
      <Text opacity={1}>
        <a
          href={"https://www.linkedin.com/in/patrycja-strulak/"}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          LinkedIn
        </a>
      </Text>
    </PageSection>
  );
};

export default Contact;
