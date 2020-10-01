import Head from "next/head";
import PageLeft from "../components/PageLeft";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <PageLeft>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h1 className="title">My Story</h1>
          <a className="description" href="#aboutDetails">
            Who is Brenden Togioka?
          </a>
        </div>
        {/* 
        <div id="aboutDetails" className={styles.aboutDetails}>
          <h1>About Details Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque
            ducimus aperiam distinctio quod inventore doloribus, ipsa
            voluptatibus esse eligendi?
          </p>
        </div> */}
      </div>
    </PageLeft>
  );
}
