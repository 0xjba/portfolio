import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jobin Babu Ayathil is a passionate engineer &amp; developer community evangelist"
      />
      <meta
        name="keywords"
        content="jobin, jobin babu ayathil, Jobin B.A , jobin ayathil, jobin babu, web developer, jobin web developer, jobin developer, mern stack, jobin portfolio, injineer, @the-injineer, @the_injineer the injineer"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jobin Babu Ayathil',
};
