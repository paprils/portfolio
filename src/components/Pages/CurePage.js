import ProjectPage from "@/components/Pages/ProjectPage";

const CurePage = () => {
  return (
    <ProjectPage
      gallery={[
        "/cure/1.jpg",
        "/cure/2.jpg",
        "/cure/3.jpg",
        "/cure/4.jpg",
        "/cure/5.jpg",
      ]}
      title={"UI Design for CURE"}
      description={
        "CURE is a Beauty & Wellness company that focuses on natural treatments and smart-aging concept. Considering this, the design is light, elegant, clear and very feminine. One main color brightens the design and attracts attention to desired places."
      }
    />
  );
};

export default CurePage;
