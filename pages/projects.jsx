const ProjectsPage = () => {
  return (
    <>
      <h1>Projects</h1>
    </>
  );
};


export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}


export default ProjectsPage;
