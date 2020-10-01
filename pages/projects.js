import Head from "next/head";
import PageLeft from "../components/PageLeft";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <PageLeft>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.projectsContent}>
        <div>
          <h1 className="title">Projects</h1>
          <p className="description">Scope the Work</p>
        </div>
        {/* <div className={styles.projectCardWrapper}>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, sit?
            </p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, sit?
            </p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, sit?
            </p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, sit?
            </p>
          </div>
          <div className={styles.projectCard}>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores, sit?
            </p>
          </div>
        </div> */}
      </div>
    </PageLeft>
  );
}
