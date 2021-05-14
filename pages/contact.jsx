const ContactPage = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
