import styles from "../styles/ContactPage.module.css";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <h1>Contact</h1>
      <div className={styles.container}>
      <div className={styles.buttons}>
          <Link href="https://www.instagram.com/the_injineer">
            <button className={styles.contained}>Instagram</button>
          </Link>
          <Link href="mailto:jobinb6444@gmail.com">
            <button className={styles.outlined}>Email Me</button>
          </Link>
      </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
