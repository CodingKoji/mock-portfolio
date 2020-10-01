import Head from "next/head";
import { motion } from "framer-motion";
import PageRight from "../components/PageRight";
import styles from "../styles/Contact.module.scss";

const contactTextVariants = {
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

export default function Contact() {
  return (
    <PageRight>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.contactContent} style={{}}>
        <motion.div
          variants={contactTextVariants}
          initial="hidden"
          animate="show"
          className={styles.contactText}
        >
          <motion.h1 variants={textVariants} className="title">
            Let's Connect
          </motion.h1>

          <motion.p variants={textVariants} className="description">
            coding.koji@gmail.com
          </motion.p>
        </motion.div>
      </div>
    </PageRight>
  );
}
