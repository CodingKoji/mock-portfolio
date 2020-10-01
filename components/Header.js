import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header({ menuOpen, handleMenu }) {
  const openMenu = () => {
    if (menuOpen) {
      handleMenu();
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
          <a onClick={openMenu}>Brenden Togioka</a>
        </Link>
      </nav>
    </header>
  );
}
