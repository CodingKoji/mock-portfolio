import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import PageRight from "../components/PageRight";
import styles from "../styles/Home.module.scss";

const homeTextVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <PageRight>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeContent} style={{}}>
        <motion.div
          variants={homeTextVariants}
          initial="hidden"
          animate="show"
          className={styles.homeText}
        >
          <motion.h1 variants={textVariants} className="title">
            Hi I'm Brenden
          </motion.h1>

          <motion.p variants={textVariants} className="description">
            Frontend web developer based out of southern California.
          </motion.p>
        </motion.div>
      </div>
    </PageRight>
  );
}
