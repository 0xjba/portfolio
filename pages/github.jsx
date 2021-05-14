const GithubPage = () => {
  return (
    <>
      <h1>Github</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Readme" },
  };
}

export default GithubPage;
