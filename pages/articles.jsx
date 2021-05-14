const ArticlesPage = () => {
  return (
    <>
      <h1>Articles</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Articles" },
  };
}

export default ArticlesPage;
