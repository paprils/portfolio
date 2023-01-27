import ProjectPage from "@/components/Pages/ProjectPage";

const AuthologicPage = () => {
  return (
    <ProjectPage
      link={"www.authologic.com"}
      gallery={["/authologic/1.jpg"]}
      title={"Web coding for Authologic"}
      description={
        "Authologic is an orchestration and aggregation layer for local KYC & AML methods.\nDuring this project I was responsible for coding website based on provided designs.\n\nFramework used: Vue"
      }
    />
  );
};

export default AuthologicPage;
