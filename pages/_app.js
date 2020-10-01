import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import "../styles/globals.css";
import Sidenav from "../components/Sidenav";

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <Header menuOpen={menuOpen} handleMenu={handleMenu} />

      <main
        style={{
          display: "flex",
          overflowX: "hidden",
        }}
      >
        <AnimatePresence>
          <div style={{ width: "100vw" }}>
            <Component {...pageProps} />
          </div>
        </AnimatePresence>
        <Sidenav menuOpen={menuOpen} handleMenu={handleMenu} />
      </main>
    </>
  );
}

export default MyApp;
