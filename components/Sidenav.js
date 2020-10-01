import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Sidenav.module.scss";

const menuVariants = {
  open: {
    width: "40vw",
  },
  closed: {
    width: "8vw",
  },
};
const menuLinksVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const imgVariants = {
  open: {
    x: "-400px",
  },
  closed: {
    x: 0,
  },
};

export default function Sidenav({ menuOpen, handleMenu }) {
  return (
    <motion.div
      initial={{ width: "8vw" }}
      animate={menuOpen ? "open" : "closed"}
      variants={menuVariants}
      className={styles.sidenav}
    >
      <button className={styles.hamburger} onClick={handleMenu}>
        <svg viewBox="0 0 100 80">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>

      <motion.div
        animate={menuOpen ? "open" : "closed"}
        variants={menuLinksVariants}
        className={styles.menuLinks}
      >
        <nav>
          <Link href="/">
            <a onClick={handleMenu}>Home</a>
          </Link>
          <Link href="/projects">
            <a onClick={handleMenu}>Projects</a>
          </Link>
          <Link href="/about">
            <a onClick={handleMenu}>About</a>
          </Link>
          <Link href="/contact">
            <a onClick={handleMenu}>Contact</a>
          </Link>
        </nav>
      </motion.div>
      <motion.img
        animate={menuOpen ? "open" : "closed"}
        variants={imgVariants}
        src="/mountains.png"
        alt="bg"
        className={styles.bg}
      />
    </motion.div>
  );
}
