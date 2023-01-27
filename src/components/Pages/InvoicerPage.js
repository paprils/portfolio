import ProjectPage from "@/components/Pages/ProjectPage";

const InvoicerPage = () => {
  return (
    <ProjectPage
      gallery={[
        "/invoicer/1.jpg",
        "/invoicer/2.jpg",
        "/invoicer/3.jpg",
        "/invoicer/4.jpg",
        "/invoicer/5.jpg",
        "/invoicer/6.jpg",
        "/invoicer/7.jpg",
        "/invoicer/8.jpg",
        "/invoicer/9.jpg",
        "/invoicer/10.jpg",
      ]}
      title={"UI Design for Invoicer"}
      description={
        "Invoicer is a time tracking app. It's main feature is to precisely measure time spent on certain projects. It's simple design helps users to focus on crucial information and data. Invoicer was designed for both dark and light mode in order to meet all user's needs."
      }
    />
  );
};

export default InvoicerPage;
