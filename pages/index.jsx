import Link from "next/link";
import styles from "../styles/HomePage.module.css";


export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <h6 className={styles.welcome}>Hola Folks! I am</h6>
        <img className={styles.avatar} src="avatar.jpg" alt="avatar"></img>
        <h1 className={styles.title}>Jobin Babu Ayathil</h1>
        <div className={styles.typing}>
          <h3 className={styles.typingText}>&lt;-- <span>Engineer</span> --&gt;</h3>
        </div>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.contained}>Know about me</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>Connect with me</button>
          </Link>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
 