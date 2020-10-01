import Head from "next/head";
import Link from "next/link";
import PageRight from "../components/PageRight";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <PageRight>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeContent} style={{}}>
        <div className={styles.homeText}>
          <h1 className="title">Hi I'm Brenden</h1>

          <p className="description">
            Frontend web developer based out of southern California.
          </p>
        </div>
      </div>
    </PageRight>
  );
}
